const getAllArticle = require("./getArticleData")

function SyncMDDataPlugin(options){

}

Object.assign(SyncMDDataPlugin.prototype,{
	apply(compiler){
		console.log(getAllArticle())
		// function writeData(){
		// 	const articles = getAllArticle();

		    
		//     const content = getFileContent(articles)
		//     // 功能完成后调用webpack提供的回调。
		//     if(!content || curentContent == content){
		//     	return false;
		//     }
		//     curentContent = content;
		//     fs.writeFileSync(WRITE_FILE_PATH, curentContent,{
  //           	charset:'utf-8'
  //           })
		// }
		// compiler.plugin('compilation', function() {
		//     writeData()
	 //  	});

	  	// var watcher = chokidar.watch(ARTILE_PATH,{
    //     	ignoreInitial:true
    //     })
    //     watcher.on('add', writeData).on('unlink',writeData).on('change',writeData)

	}
})
module.exports = SyncMDDataPlugin