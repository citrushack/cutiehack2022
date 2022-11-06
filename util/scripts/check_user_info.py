from pymongo import MongoClient
from pprint import pprint

def check_size(client):
    firstName = input('first name: ')
    db = client['test']  
    users = db['users']
    for user in users.find():
        if user.get('name'):
            first = (user.get('name').get('first'))
            if str(first).lower() == str(firstName).lower():
                pprint(user.get('name').get('first'))
                pprint(user.get('name').get('last'))
                pprint(user.get('shirtSize'))
                pprint(user.get('school'))
                pprint(user.get('applied_after_limit'))
                print('\n')
            
if __name__ == "__main__":   
    CONNECTION_STRING = "mongodb+srv://natedev:dJltSYC3qTf11STO@cutiehack2022.wntjvk5.mongodb.net/?retryWrites=true&w=majority"
    client = MongoClient(CONNECTION_STRING)

    check_size(client)