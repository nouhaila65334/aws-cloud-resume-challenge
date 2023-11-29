import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume-test')


def lambda_handler(event, context):
    response = table.get_item(Key={
       'id': '1'
    })
    views = response['Item']['views']
    views = int(views) + 1  
    print(views)

    # Update the DynamoDB item with the new views count
    response = table.put_item(Item={
       'id': '1',
       'views': views
    })

    # Return a JSON response with the updated views count
    return {
        'statusCode': 200,
        'body': json.dumps({'views': views})
    }