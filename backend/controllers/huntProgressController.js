export const createHuntProgress = async (req,res) => {
    const {users,hunt_id} = req.body;

    if (!users || !hunt_id) {
        throw new BadRequestError('Please provide users and hunt id!');
    }

    req.body.createdBy = req.user.userId;

};

