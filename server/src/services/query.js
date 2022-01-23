
//when we want all the documents and no limit needs to be added 
//mongo returns all the documents if limit assigned is 0
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query){

    const page = Math.abs(query.page) || 1;
    const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
    const skip = (page-1)*limit;

    return {
        skip,
        limit
    } 
}

module.exports = {
    getPagination
}