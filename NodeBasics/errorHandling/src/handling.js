const fs = require("fs");

module.exports = {
    sync: function()
    {
        try {
            const m = 1;
            const n = m + z;
        } catch(err) {
            throw `This is a sync ${err}`;
        }
    },

    errorFirstCallbackWrong: function()
    {
        try {
            fs.readFile('some/file/that/does-not-exists', (err, data) =>
            {
                // mistaken assumption: thrrowing here...
                if(err)
                {
                    throw `THis is a sync ${err}`;
                }
            });
        } catch (err) {
            // This will not catch the throw
            console.error(`catched er: ${err}`);
        }
    },

    errorFirstCallback: function()
    {
        fs.readFile('/some/file/that/does-not-exist', (err, data) =>
        {
            if(err)
            {
                console.log(`This error-first callback`, err);
                return;
            }
            console.log(data);
        });
    }
}