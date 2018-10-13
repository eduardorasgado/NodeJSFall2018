module.exports = {
    // version sincrona
    syncSum: function(a, b)
    {
        console.log(a + b);
    },

    // version asincronica
    asyncSum: function (a, b)
    {
        setTimeout(() =>
        {
            console.log(a + b);
        }, 2000);
    }
}