import connection from "../database/connectionDb.js";

//INDEX

function index(req, res, next) {
  const tripsQuery = `
  SELECT *
  FROM trip
  `;

  connection.query(tripsQuery, (err, results) => {
    if (err) return next(err);

    return res.json(results);
  });
}

//SHOW

function show(req, res, next) {
  const { id } = req.params;

  const tripQuery = `
  SELECT *
  FROM trip
  WHERE id = ?
  `;

  connection.query(tripQuery, [id], (err, results) => {
    if (err) return next(err);

    const tripResult = results[0];

    if (results.length === 0 || !tripResult) {
      res.status(404);
      return res.json({
        error: "NOT FOUND",
        message: "Il film non è stato trovato",
      });
    }

    return res.json(tripResult);
  });
}

export default { index, show };
