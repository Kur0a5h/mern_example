const router = require('express').Router();
const {students} = require('../../controllers');

router.get('/', students.getAll);
router.get('/:student_id', students.getOne);

module.exports = router;
