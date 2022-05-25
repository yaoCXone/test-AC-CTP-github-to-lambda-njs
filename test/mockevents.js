
const all_s3_events =[
    {
        "Records": [
          {
            "eventVersion": "2.0",
            "eventSource": "aws:s3",
            "awsRegion": "us-east-1",
            "eventTime": "1970-01-01T00:00:00.000Z",
            "eventName": "ObjectCreated:Put",
            "userIdentity": {
              "principalId": "EXAMPLE"
            },
            "requestParameters": {
              "sourceIPAddress": "127.0.0.1"
            },
            "responseElements": {
              "x-amz-request-id": "EXAMPLE123456789",
              "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH"
            },
            "s3": {
              "s3SchemaVersion": "1.0",
              "configurationId": "testConfigRule",
              "bucket": {
                "name": "ctp-s3-bucket",
                "ownerIdentity": {
                  "principalId": "EXAMPLE"
                },
                "arn": "arn:aws:s3:::ctp-s3-bucket"
              },
              "object": {
                "key": "test%2Fkey%2FDumpStack.log",
                "size": 1024,
                "eTag": "0123456789abcdef0123456789abcdef",
                "sequencer": "0A1B2C3D4E5F678901"
              }
            }
          }
        ]
    }
];

const all_ctr_events =[
    {
        "AWSAccountId": "970025851406",
        "AWSContactTraceRecordFormatVersion": "2017-03-10",
        "Agent": {
          "ARN": "arn:aws:connect:us-east-1:970025851406:instance/1d908e11-3d5f-4cfb-b34d-1e7e0f216898/agent/57db30ae-8c01-44e6-abd5-80b7b51944cf",
          "AfterContactWorkDuration": 32,
          "AfterContactWorkEndTimestamp": "2022-04-08T15:01:54Z",
          "AfterContactWorkStartTimestamp": "2022-04-08T15:01:22Z",
          "AgentInteractionDuration": 33,
          "ConnectedToAgentTimestamp": "2022-04-08T15:00:49Z",
          "CustomerHoldDuration": 0,
          "HierarchyGroups": null,
          "LongestHoldDuration": 0,
          "NumberOfHolds": 0,
          "RoutingProfile": {
            "ARN": "arn:aws:connect:us-east-1:970025851406:instance/1d908e11-3d5f-4cfb-b34d-1e7e0f216898/routing-profile/6e16b957-b7c7-44c7-b959-c9380699c7cc",
            "Name": "Basic Routing Profile"
          },
          "Username": "admin1"
        },
        "AgentConnectionAttempts": 1,
        "AnsweringMachineDetectionStatus": null,
        "Attributes": {
          "greetingPlayed": "true"
        },
        "Campaign": {
          "CampaignId": null
        },
        "Channel": "VOICE",
        "ConnectedToSystemTimestamp": "2022-04-08T14:59:38Z",
        "ContactDetails": {},
        "ContactId": "15a5cf14-3212-45a1-9f86-a8e97db8afaf",
        "CustomerEndpoint": {
          "Address": "+17208401003",
          "Type": "TELEPHONE_NUMBER"
        },
        "DisconnectReason": "CUSTOMER_DISCONNECT",
        "DisconnectTimestamp": "2022-04-08T15:01:22Z",
        "InitialContactId": null,
        "InitiationMethod": "INBOUND",
        "InitiationTimestamp": "2022-04-08T14:59:38Z",
        "InstanceARN": "arn:aws:connect:us-east-1:970025851406:instance/1d908e11-3d5f-4cfb-b34d-1e7e0f216898",
        "LastUpdateTimestamp": "2022-04-08T15:03:02Z",
        "MediaStreams": [
          {
            "Type": "AUDIO"
          }
        ],
        "NextContactId": null,
        "PreviousContactId": null,
        "Queue": {
          "ARN": "arn:aws:connect:us-east-1:970025851406:instance/1d908e11-3d5f-4cfb-b34d-1e7e0f216898/queue/c677a7a5-1d56-4ce3-a890-79fc53f7fe3f",
          "DequeueTimestamp": "2022-04-08T15:00:49Z",
          "Duration": 7,
          "EnqueueTimestamp": "2022-04-08T15:00:42Z",
          "Name": "BasicQueue"
        },
        "Recording": {
          "DeletionReason": null,
          "Location": "amazon-connect-fcc603e85e16/connect/kightsCC/CallRecordings/2022/04/08/15a5cf14-3212-45a1-9f86-a8e97db8afaf_20220408T15:00_UTC.wav",
          "Status": "AVAILABLE",
          "Type": "AUDIO"
        },
        "Recordings": [
          {
            "DeletionReason": null,
            "FragmentStartNumber": null,
            "FragmentStopNumber": null,
            "Location": "amazon-connect-fcc603e85e16/connect/kightsCC/CallRecordings/2022/04/08/15a5cf14-3212-45a1-9f86-a8e97db8afaf_20220408T15:00_UTC.wav",
            "MediaStreamType": "AUDIO",
            "ParticipantType": null,
            "StartTimestamp": null,
            "Status": "AVAILABLE",
            "StopTimestamp": null,
            "StorageType": "S3"
          }
        ],
        "References": [],
        "ScheduledTimestamp": null,
        "SystemEndpoint": {
          "Address": "+14065003978",
          "Type": "TELEPHONE_NUMBER"
        },
        "TransferCompletedTimestamp": null,
        "TransferredToEndpoint": null,
        "VoiceIdResult": null
    }
];

exports.s3_event_01=function(){
    return all_s3_events[0];
};

exports.ctr_event_01 = function(){
    return all_ctr_events[0];
};

exports.all_s3_events = all_s3_events;
exports.all_ctr_events = all_ctr_events;