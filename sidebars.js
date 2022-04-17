/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
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
		{
			type: 'category',
			label: '项目实训记载',
			link: {type: 'generated-index'},
			items: [
				'项目实训记载/医院管理系统（门诊）',
			],
		},
	],
};

module.exports = sidebars;
