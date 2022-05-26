/**
 * 创建侧边栏使您能够:
 - 创建一个有序的文档组
 - 为该组的每个文档呈现一个侧边栏
 - 提供下/以前的导航

 侧边栏可以从文件系统生成，也可以在这里显式地定义。

 创建尽可能多的侧边栏。
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // 默认情况下，Docusaurus从docs文件夹结构生成一个侧边栏
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // 但是你可以手动创建一个侧边栏
  //tutorialSidebar: [
  //  {
  //    type: 'category',
  //    label: 'Tutorial',
  //    items: ['intro'],
  //  },
  //],
   
   docs: [
		'此处开始',
		{
			type: 'category',
			label: '技术栈',
			link: {type: 'generated-index'},
			items: [
				'技术栈/Java基础',
				'技术栈/JavaWed',
				'技术栈/SSM整合',
				{
					type: 'category',
					label: 'Maven',
					link: {type: 'generated-index'},
					items: [
						{
							type: 'category',
							label: '学习笔记',
							link: {type: 'generated-index'},
							items: [
								'技术栈/Maven/学习笔记/第00章_源自',
								'技术栈/Maven/学习笔记/第01章_Maven概述',
								'技术栈/Maven/学习笔记/第02章_Maven 核心程序解压和配置',
								'技术栈/Maven/学习笔记/第03章_使用 Maven：命令行环境',
								'技术栈/Maven/学习笔记/第04章_使用Maven：IDEA环境',
							],
						},
					],
				},
				'技术栈/MySQL',
				//'技术栈/Ajax',
				//'技术栈/Promise',
				//'技术栈/Axios',
				{
					type: 'category',
					label: 'Linux',
					link: {type: 'generated-index'},
					items: [
						'技术栈/Linux/介绍',
						'技术栈/Linux/系统目录结构',
						'技术栈/Linux/远程登录到Linux服务器',
						'技术栈/Linux/Vi和Vim编辑器',
					],
				},
			],
		},
		//{
		//	type: 'category',
		//	label: '项目实训记载',
		//	link: {type: 'generated-index'},
		//	items: [
		//		'项目实训记载/医院管理系统（门诊）',
		//	],
		//},
		'学习笔记',
		'应用',
		'在线工具',
	],
};

module.exports = sidebars;