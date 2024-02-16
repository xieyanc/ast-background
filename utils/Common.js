class Common {
  judgeKey = {
    page: 1,
    size: 1,
    list: 1,
    like: 1,
    orderby: 1,
    pageNum: 1,
    pageSize: 1
  }

  constructor(sql, obj) {
    this.sql = sql || ''
    this.obj = obj || {}
    this.objWithNoSign = {}
    this.page = -1
    this.size = 0
    this.tableName = ''; // 默认表名
  }

  /**
   * 设置要查询的表名
   * @param {string} tableName - 表名
   * @return {Common}
   */
  from(tableName) {
    this.tableName = tableName;
    return this;
  }

  /**
   * sql添加 WHERE条件，适用于只有一个条件
   * @return {Common}
   */
  getWhere () {
    this.sql += ' WHERE '

    let judge = false // 判断是否是第一次添加sql的where条件
    let sign = '=' // type sign = '=' | 'LIKE' 用于判断是精准查询还是模糊查询

    if (this.obj.like == 1) {
      sign = 'LIKE'
    }

    for (const key in this.obj) {
      if (this.judgeKey[key]) continue

      if (judge) {
        this.sql += `AND ${this.tableName}.${key} ${sign} ${this.obj[key]} `
      } else {
        this.sql += `${this.tableName}.${key} ${sign} ${this.obj[key]} `
        judge = true
      }
    }

    return this
  }

  getOrderby () {
    if (this.obj.orderby) {
      this.sql += ' ORDER BY ' + this.obj.orderby.replace(/'/g, '')
    }
    return this
  }

  /**
   * 对从url获取的参数进行处理
   * @param {string} url
   * @return { Common }
   */
  handleUrlData (url) {
    let a = url.split('?')[1].split('&')

    let like = a.indexOf('like=1') !== -1

    if (a) {
      a.forEach(element => {
        // 使用正则表达式匹配key和value
        const match = element.match(/([^=]+)=(.+)/);
        if (match) {
          // 将匹配到的结果放入对象中
          const key = match[1];
          let value = match[2];

          // 加上两个 %% 是为了使用like进行模糊查询
          if (value.includes('%')) {
            value = decodeURIComponent(value);
            this.obj[key] = like ? `'%${value}%'` : `'${value}'`
          } else if (typeof value === 'string') {
            // 处理数字型数据，数字有时候也会判断为string，如果直接处理成'10'的形式，那么实际输出是 num = "'10'"，此时将其转为数字会输出NaN，所以需要判断是否为数字
            if (isNaN(Number(value))) {// 通过转为数字型判断是否为数字，如果存在字符，如abc213，那么输出NaN
              this.obj[key] = like ? `'%${value}%'` : `'${value}'`
            } else {
              this.obj[key] = `${value}`
            }
          } else {
            this.obj[key] = like ? `'%${value}%'` : `'${value}'`;
          }
        }
      });
    }

    return this
  }

  /**
   * 不会自动添加''，无需匹配sql传参规则
   * @param url
   * @return {Common}
   */
  handleUrlDataWithNoSign (url) {
    let a = url.split('?')[1].split('&')

    if (a) {
      a.forEach(element => {
        // 使用正则表达式匹配key和value
        const match = element.match(/([^=]+)=(.+)/);
        if (match) {
          // 将匹配到的结果放入对象中
          const key = match[1];
          let value = match[2];

          // 加上两个 %% 是为了使用like进行模糊查询
          if (value.includes('%')) {
            value = decodeURIComponent(value);
            this.objWithNoSign[key] = `${value}`
          } else if (typeof value === 'string') {
            // 处理数字型数据，数字有时候也会判断为string，如果直接处理成'10'的形式，那么实际输出是 num = "'10'"，此时将其转为数字会输出NaN，所以需要判断是否为数字
            if (isNaN(Number(value))) {// 通过转为数字型判断是否为数字，如果存在字符，如abc213，那么输出NaN
              this.objWithNoSign[key] = `${value}`
            } else {
              this.objWithNoSign[key] = `${value}`
            }
          } else {
            this.objWithNoSign[key] = `${value}`;
          }
        }
      });
    }

    return this
  }

  /**
   * 获取分页数据
   * @return {Common}
   */
  getLimit () {
    let size = Number(this.obj.size | this.obj.pageSize)
    let page = Number((this.obj.page | this.obj.pageNum) - 1) * size

    this.sql += ` LIMIT ${size} OFFSET ${page}`

    return this
  }

  setObj (obj) {
    this.obj = obj

    return this
  }

  setSql (sql) {
    this.sql = sql
    return this
  }

  getSql () {
    console.log('sql log: ', this.sql)
    return this.sql
  }

  getNoSignParams () {
    return this.objWithNoSign
  }

  getParams () {
    return this.obj
  }

  delParams (key) {
    delete this.obj[key]
    return this
  }

  addParams (key, value) {
    this.obj[key] = value

    return this
  }

  getInsert(table_name, data) {
    let params = this.filterNullValues(data)
    const columns = Object.keys(params).join(', ');
    const values = Object.values(params).map(value => typeof value === 'string' ? `'${value}'` : value).join(', ');

    this.sql = `INSERT INTO ${table_name} (${columns}) VALUES (${values});`;

    return this;
  }

  filterNullValues(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== null) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }

  filterStringToNumber(str) {
    return str.replace(/'/g, '');
  }

}

module.exports = Common