function createUrl(
    controllerName: string,
    version = 1,
    host = __API__,
): string {
    return `${host}/api/v${version}/${controllerName}`;
}

export const ApiRoutingUtils = {
    createUrl,
};
