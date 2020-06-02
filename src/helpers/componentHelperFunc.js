

export const cleanUpData = (abortController) =>
{
    abortController.abort();
}

export const instantiateAbort = () =>
{
    const abortController = new AbortController();
    const signal = abortController.signal;
    return abortController;
}

