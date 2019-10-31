##react 基础模板，在create-react-app 上进行改造


### 1.关于测试环境打包
添加 stg 打包， 用于打包测试环境所需代码。打包的文件夹名默认为buildStg，可在.env.stg 文件中修改


### 2.添加 store


### 3.添加 router


### 4. 添加less 和 less 变量全局导入
具体在 webpack.config 文件中查看， less 的 变量文件位置 可在.env 配置


### 5. 添加基础的axios 的封装


### 6. 添加权限控制
主要是使用key 标识路由，然后后台返回权限路由， 然后使用  hocs/PermissionHOC 进行匹配
主要是对 store/permission 的白名单 和 权限路由列表匹配


### 7. 添加对路由级别的基础处理 高阶组件，具体查看 hocs/BaseRouterHOC
