function insertParamsToString(str: string, params: (string | number)[]) {
    if (!str) return '';

    params.forEach((param) => {
        const startIndex = str.indexOf('{');
        const endIndex = str.indexOf('}');

        str = str.replace(
            str.substr(startIndex, endIndex - startIndex + 1),
            String(param),
        );
    });

    return str;
} // insertParamsToString

function replaceAll(
    str: string,
    searchValues: string[],
    replaceValues: string[],
) {
    for (let i = 0; i < searchValues.length; i++) {
        str = str.split(searchValues[i]).join(replaceValues[i]);
    } // for

    return str;
} // replaceAll

export const stringUtils = {
    insertParamsToString,
    replaceAll,
};
