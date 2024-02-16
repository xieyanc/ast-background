const adminConfig = {
  "code": 200,
  "data": [
    {
      "id": 1,
      "name": "首页",
      "url": "/main/analysis",
      "icon": "el-icon-monitor",
      "sort": 1,
      "children": [
        {
          "id": 101,
          "url": "/main/analysis/overview",
          "name": "首页",
          "sort": 106,
          "type": 2,
          "children": null,
          "parentId": 38
        }
      ]
    },
    {
      "id": 2,
      "name": "内容管理",
      "url": "/main/system",
      "icon": "el-icon-setting",
      "sort": 2,
      "children": [
        {
          "id": 103,
          "url": "/main/system/user",
          "name": "公告管理",
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
              "permission": "system:notice:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:notice:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:notice:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:notice:query"
            }
          ]
        },
        {
          "id": 104,
          "url": "/main/system/department",
          "name": "轮播图管理",
          "sort": 109,
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
              "permission": "system:swiper:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:swiper:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:swiper:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:swiper:query"
            }
          ]
        },
        {
          "id": 105,
          "url": "/main/system/menu",
          "name": "新闻管理",
          "sort": 110,
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
              "permission": "system:article:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:article:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:article:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:article:query"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "用户中心",
      "url": "/main/product",
      "icon": "el-icon-goods",
      "sort": 3,
      "children": [
        {
          "id": 107,
          "url": "/main/product/category",
          "name": "企业管理",
          "sort": 112,
          "type": 2,
          "children": [
            {
              "id": 5,
              "url": null,
              "name": "创建用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:enterprise_users:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:enterprise_users:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:enterprise_users:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:enterprise_users:query"
            }
          ],
          "parentId": 38
        },
        {
          "id": 108,
          "url": "/main/product/goodsmes",
          "name": "管理员管理",
          "sort": 113,
          "type": 2,
          "children": [
            {
              "id": 5,
              "url": null,
              "name": "创建用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:user:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:user:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:user:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:user:query"
            }
          ],
          "parentId": 38
        },
        {
          "id": 111,
          "url": "/main/product/students",
          "name": "学生管理",
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
              "permission": "system:students:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:students:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:students:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:students:query"
            }
          ],
          "parentId": 38
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
          "id": 122,
          "url": "/main/chat/recruitment_admin",
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
              "permission": ""
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:recruitment_admin:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:recruitment_admin:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:recruitment_admin:query"
            }
          ],
          "parentId": 38
        },
        {
          "id": 125,
          "url": "/main/chat/department",
          "name": "院系管理",
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
              "permission": "system:department:create"
            },
            {
              "id": 6,
              "url": null,
              "name": "删除用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:department:delete"
            },
            {
              "id": 5,
              "url": null,
              "name": "修改用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:department:edit"
            },
            {
              "id": 5,
              "url": null,
              "name": "查询用户",
              "sort": null,
              "type": 3,
              "parentId": 2,
              "permission": "system:department:query"
            }
          ],
          "parentId": 38
        }
      ]
    }
  ]
}

module.exports = adminConfig