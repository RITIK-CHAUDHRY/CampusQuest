import Hunt from '../models/Hunt.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';

const createHunt = async (req, res) => {
  const {name,title,description,stages,clues } = req.body;

  if (!name || !title || !description || !stages || !clues ) {
    throw new BadRequestError('Please provide all values');
  }
  req.body.createdBy = req.user.userId;
  const hunt = await Hunt.create(req.body);
  res.status(StatusCodes.CREATED).json({ hunt });
};
const getAllHunts = async (req, res) => {
  let result = await Hunt.find();
  const totalHunts = await Hunt.countDocuments();
  const numOfPages = Math.ceil(totalHunts / 20);

  res.status(StatusCodes.OK).json({ result, totalHunts, numOfPages });
};
const updateHunt = async (req, res) => {
  const { id: huntId } = req.params;
  const { company, position } = req.body;

  if (!position  || !company) {
    throw new BadRequestError('Please provide all values');
  }
  const hunt = await Hunt.findOne({ _id: huntId });

  if (!hunt) {
    throw new NotFoundError(`No hunt with id :${huntId}`);
  }
  // check permissions

  checkPermissions(req.user, hunt.createdBy);

  const updatedHunt = await Hunt.findOneAndUpdate({ _id: huntId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedHunt });
};


export { createHunt, updateHunt, getAllHunts};
