// Function used to extract the JWT token from the request's 'Authorization' Headers
function isGroupMember(req, res, next) {
    console.log(req.payload);
    console.log(req.params.groupId);
    
    return next();
}

// Export the middleware so that we can use it to create protected routes
module.exports = {
    isGroupMember,
};
