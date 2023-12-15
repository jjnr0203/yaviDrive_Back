import express from 'express';
import connectionDB from '../database';
const router = express.Router();

router.get('/:id', (req, res) => {
    connectionDB.query("SELECT customer.name, customer.photo, customer.lastname, roles.rol_name FROM customer, users, roles WHERE customer.user_id = users.id_user AND users.id_user = '1' AND roles.id_role = users.id_role",
        (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results.rows[0]);
        });
});

router.get('/:id', (req, res) => {
    connectionDB.query("SELECT drivers.name, drivers.photo, drivers.lastname, roles.rol_name FROM drivers, users, roles WHERE drivers.user_id = users.id_user AND users.id_user = '11' AND roles.id_role = users.id_role",
        (error, results) => {
            if (error) {
                throw error;
            }
            res.send(results.rows[0]);
        });
});






export default router;