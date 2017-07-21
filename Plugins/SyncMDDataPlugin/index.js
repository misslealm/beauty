/**
 * webpack插件
 *  同步article 下的文件，并且生成一个文件，文件格式为

export default [{
	title:'文章标题'
	createTime:'',
	component:()=>System.import('article/sds.md')
	filePath:''  // 文章路径
}]

 */
const path = require("path")
const fs = require("fs")
const getAllArticle = require("./getArticleData")
var chokidar = require('chokidar');
const ARTILE_PATH = path.join(__dirname,'../../article')
const WRITE_FILE_PATH = path.join(__dirname,"../../src/data","article.js")
function SyncMDDataPlugin(options){

}
function getFileContent(fileList){
	const finalFileList = fileList.map((file) => {
		const result = []
		const keys = Object.keys(file)
		keys.map((k) => {
			result.push(`"${k}":${JSON.stringify(file[k])}`)
		})
		result.push(`"component":()=>System.import('article${file.path}.md')`)
		return `
		{
			${result.join(',')}
		}`
	})
	return `
	export default [${finalFileList.join(',')}]
	`
}
var curentContent = ''
Object.assign(SyncMDDataPlugin.prototype,{
	apply(compiler){
		function writeData(){
			const articles = getAllArticle();

		    
		    const content = getFileContent(articles)
		    // 功能完成后调用webpack提供的回调。
		    if(!content || curentContent == content){
		    	return false;
		    }
		    curentContent = content;
		    fs.writeFileSync(WRITE_FILE_PATH, curentContent,{
            	charset:'utf-8'
            })
		}
		compiler.plugin('compilation', function() {
		    writeData()
	  	});

	  	// var watcher = chokidar.watch(ARTILE_PATH,{
    //     	ignoreInitial:true
    //     })
    //     watcher.on('add', writeData).on('unlink',writeData).on('change',writeData)

	}
})
module.exports = SyncMDDataPlugin
