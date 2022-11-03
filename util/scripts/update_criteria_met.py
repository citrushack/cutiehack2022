from pymongo import MongoClient

ucr_variants = ['universityofcaliforniariverside', 'ucr', 'ucriverside', 'ucrbcoe', 'bcoe', 'chaas', 'bournscollegeofengineering', 'universitycaliforniariverside']

criteriaMet_new_val = { "$set": { "criteriaMet": True } }

def get_num_users_in_person(client):
    db = client['test']  
    users = db['users']
    num_users_in_person = 0
    for user in users.find():
        if user.get('participation') == 'In-Person': num_users_in_person += 1
    return num_users_in_person


def update_criteria_met(client, num_users_in_person):
    db = client['test']  
    users = db['users']

    print('updated users')
    for user in users.find():
        # only parse applied applicants
        if user.get('appliedAt'):
            criteria_met = True

            school = user.get('school')
            school = ''.join([i for i in school if i.isalpha()]).lower()
            school = school.replace(" ", "")
            if school not in ucr_variants:
                criteria_met = False
            if user.get('participation') == 'Online':
                criteria_met = True
            if user.get('grade') == 'Graduate':
                criteria_met = False
            if criteria_met and not user.get('criteriaMet') and num_users_in_person < 350:
                criteriaMet_query = { "_id": user.get('_id') }
                users.find_one_and_update(criteriaMet_query, criteriaMet_new_val)
                print(user.get('email'))

if __name__ == "__main__":   
    CONNECTION_STRING = "mongo_connection_string"
    client = MongoClient(CONNECTION_STRING)

    num_users_in_person = get_num_users_in_person(client)

    update_criteria_met(client, num_users_in_person)