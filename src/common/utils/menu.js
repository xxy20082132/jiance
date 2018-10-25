const allMenu = [
  {
    name: '首页',
    url: 'home',
    icon: 'home',
  }, {
    name: '实时',
    url: 'realtime',
    icon: 'line-chart',
  }, {
    name: '告警',
    url: 'tool',
    icon: 'alert',
    children: [
      { name: '小应用', url: 'tools' },
      { name: '富文本编辑器', url: 'editor' },
      { name: '待办事项', url: 'todoList' },
    ],
  }, {
    name: '报表',
    url: 'pic',
    icon: 'database',
    children: [
      { name: '时光相片', url: 'album' },
      { name: '瀑布流', url: 'waterfall' },
    ],
  }, {
    name: '视频',
    url: 'search',
    icon: 'video-camera',
    children: [
      { name: '搜索引擎', url: 'searchEngine' },
    ],
  }, {
    name: 'mock联调',
    url: 'dev',
    icon: 'apple-o',
    children: [
      { name: 'mock', url: 'mock' },
      { name: '更多模块开发中', url: 'todo' },
    ],
  }, {
    name: '项目管理',
    url: 'follow',
    icon: 'setting',
  }]

export default allMenu
