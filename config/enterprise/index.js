const enterpriseConfig = {
  "code": 200,
  "data": [
    {
      "id": 2,
      "name": "内容管理",
      "url": "/main/system",
      "icon": "el-icon-setting",
      "sort": 2,
      "children": [
        {
          "id": 123,
          "url": "/main/system/news",
          "name": "新闻管理",
          "sort": 108,
          "type": 2,
          "parentId": 38,
          "children": [
            {
              "id": 5,
              "url": null,
              "name": "创建用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:news:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:news:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:news:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:news:query"
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "信息管理",
      "url": "/main/chat",
      "icon": "el-icon-chat-line-round",
      "sort": 4,
      "children": [
        {
          "id": 109,
          "url": "/main/chat/story",
          "name": "求职者信息管理",
          "sort": 114,
          "type": 2,
          "children": [
            {
              "id": 5,
              "url": null,
              "name": "创建用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:job_information:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:job_information:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:job_information:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:job_information:query"
            }
          ],
          "parentId": 38
        },
        {
          "id": 110,
          "url": "/main/chat/storylist",
          "name": "招聘信息管理",
          "sort": 115,
          "type": 2,
          "children": [
            {
              "id": 5,
              "url": null,
              "name": "创建用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:recruitment_information:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:recruitment_information:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:recruitment_information:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:recruitment_information:query"
            }
          ],
          "parentId": 38
        },
      ]
    }
  ],
  "status": "success"
}

module.exports = enterpriseConfig