from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gestionstudent'
 
mysql = MySQL(app)
CORS(app)

@app.route('/students', methods=['GET'])
def get_students():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM students")
    students = cursor.fetchall()
    cursor.close()
    return jsonify(
        [{'id': s[0], 'firstname': s[1], 'lastname': s[2], 'Datebirthday': s[3], 'email': s[4]} for s in students]
    )
@app.route('/student/<int:id>', methods=['GET'])
def get_student(id):
    cursor = mysql.connection.cursor()
    cursor.execute(f"SELECT * FROM students where id = {id}")
    student = cursor.fetchone()
    cursor.close()
    return jsonify(
        {'id': student[0], 'firstname': student[1], 'lastname': student[2], 'Datebirthday': student[3], 'email': student[4]}
    )
@app.route('/students', methods=['POST'])
def add_student():
    data = request.json
    print(data['firstname'])
    cursor = mysql.connection.cursor()
    query = "INSERT INTO students (firstname, lastname, Datebirthday, email) VALUES (%s, %s, %s, %s)"
    values = (data['firstname'], data['lastname'], data['Datebirthday'], data['email'])
    cursor.execute(query, values)
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'student added successfully'})

@app.route('/student/<int:id>/update', methods=['PUT'])
def update_student(id):
    data = request.json
    cursor = mysql.connection.cursor()
    query = "UPDATE students SET firstname = %s, lastname = %s, Datebirthday = %s, email = %s WHERE id = %s"
    values = (data['firstname'], data['lastname'], data['Datebirthday'], data['email'], id)
    cursor.execute(query, values)
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'student updated successfully'})

@app.route('/student/<int:id>/delete', methods=['DELETE'])
def delete_student(id):
    cursor = mysql.connection.cursor()
    query = f"DELETE FROM students WHERE students.id = {id};"
    cursor.execute(query)
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'student deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True,port=5000, host='localhost')