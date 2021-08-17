
/**
 * handles the uploading of files and making them into usersession, and database
 */
module.exports.uploadFileAndStore = async (req, res, next) => {

    if (allowedUploads.includes(req.file.mimetype)) {
        if (!req.user) {
            //console.log('does not exists')
            res.status(403).send('user is not loged in')

        } else {
            const data = {
                author: req.user._id,
                timestamp: Date.now(),
                sessionId: req.sessionID,
                data: req.file,
                finished: false
            }
            const result = new Task(data)
            await result.save()
            await res.send(result)
        }

    } else {
        //deletes unsuported files
        deleteFile(req.file)
        res.status(400).send(
            'Nepodporovaný typ souboru!'
        )
    }

}
