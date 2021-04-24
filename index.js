// Add your functions here

function map(arr, callback)
{
    const result = []
    for (let i = 0; i < arr.length; i++)
    {
        const e = arr[i]
        result.push(callback(e));
    }
    return result;
}

function reduce(arr, callback, startInt)
{
    let result;
    if (startInt)
    {
        result = startInt;
        for (let i = 0; i < arr.length; i++)
        {
            result = callback(arr[i], result);
        }
        return result;
    }
    else
    {
        result = arr[0];
        for (let i = 0; i < arr.length; i++)
        {
            result = callback(arr[i], result);
        }
        return result;
    }
}