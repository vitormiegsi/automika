module.exports = {
	list(callback) {
		var sql = 'SELECT * from clientes';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
			
		});
	},

	read(username, callback) {
		var sql = "SELECT * from clientes where idclientes=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},



	create(data, callback) {
		var sql = "INSERT INTO clientes (password_part, nome_participante, tel_participante, username_part, email_part) VALUES (?,?,?,?,?)";
		global.connection.query(
			sql, [data.password, data.name, data.numero, data.username, data.email],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},








	remove(username, callback) {
		var sql = "DELETE from clientes WHERE username=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
		});
	},

	/*
	takenUsername(username, callback) {
	    
	    var sql = "SELECT password FROM participantes WHERE username=?"
	    var user = global.connection.query(SQL, [username] );
	                                       
	                                       
	                function bit (error, rows, fields){
				     if (user === undefined)  {callback(true);
	                    }else{
	                        callback(false);
	                    }
	    }
	},
	                   
	*/




	//New
	areValidCredentials(username, password, callback) {
		var sql = "SELECT password FROM users WHERE username=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			if (rows.length == 1 && rows[0].password === password) {
				callback(true);
			} else {
				callback(false);
			}
		});
	}

	

};