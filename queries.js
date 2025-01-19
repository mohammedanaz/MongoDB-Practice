print("Script starts...");
const db = connect("127.0.0.1:27017/school");

const result = db.students.find(
    {
        $or: [
            {
                "age": {$lt: 65}
            },
            {
                "place": "Kerala"
            }
        ]
    }
);
printjson(result);

print("Script executed successfully.");
