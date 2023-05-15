import { projectScheme, projectUpdateScheme } from '../schemes/projects.schemes.js'

function validateProject(req, res, next) {
    projectScheme.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (project) {
            req.body = project
            next()
        })
        .catch(function (error) {
            res.status(400).json({ error })
        })
}

function validateProjectUpdate(req, res, next) {
    projectUpdateScheme.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (project) {
            req.body = project
            next()
        })
        .catch(function (error) {
            res.status(400).json({ error })
        })
}

export {
    validateProject,
    validateProjectUpdate
}