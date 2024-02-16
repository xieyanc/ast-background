const studentConfig = {
  "code": 200,
  "data": [
    {
      "id": 4,
      "name": "信息管理",
      "url": "/main/chat",
      "icon": "el-icon-chat-line-round",
      "sort": 4,
      "children": [
        {
          "id": 120,
          "url": "/main/student_system/exam_list",
          "name": "投递记录",
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
              "permission": "system:exam_list:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:exam_list:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:exam_list:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:exam_list:query"
            }
          ],
          "parentId": 38
        },
      ]
    }
  ],
  "status": "success"
}

module.exports = studentConfig