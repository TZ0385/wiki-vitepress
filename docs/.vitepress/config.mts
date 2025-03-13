import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ckcsec",
  description: "CKCsec安全研究院",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: 'https://ckcsec.oss-cn-hangzhou.aliyuncs.com/img/ckc.jpg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: '/' },
      {
        text: "关于文库",
        items: [
          { text: '文库介绍', link: '/about/' },
          { text: '支持项目', link: '/about/support' },
          { text: '使用指南', link: "/about/使用指南" },
        ]
      },
      {
        text: "web安全",
        items: [
          { text: "基础篇",  link: '/web/basis/'},
          { text: "靶场篇", link: '/web/range/'},
          { text: "工具篇", link: '/web/tools/'},
          { text: "漏洞速递", link: '/web/cert/'},
          { text: "应急响应", link: '/web/emer/'},
          { text: "环境避坑", link: '/web/environment/'},
          { text: "SRC", link: '/web/SRC/'}
        ]
      },
      {
        text: "区块链",
        items: [
          { text: "区块链入门",  link: '/blockchain/'},
          { text: "区块链市场", link: '/blockchain/transaction'},
          { text: "区块链安全", link: '/blockchain/bug/'}       
        ]
      },
      {
        text: "红蓝对抗",
        items: [
            { text: "流量隐匿", link: "/redteam/流量隐匿/"},
            { text: "免杀对抗", link: "/redteam/免杀对抗/"}
          ]
      },     
      {
        text: 'CTF',
        items: [
            { text: "Misc", link: "/ctf/Misc/"},
            { text: "Web", link: "/ctf/Web/"},
            { text: "Pwn", link: "/ctf/Pwn/"},
            { text: "Crypto", link: "/ctf/Crypto/"},
            { text: "Reverse", link: "/ctf/Reverse/"}
          ],
        },
      {
        text: '友情链接',
        items: [
          { text: "合作伙伴", link: "/cooperation/friend/"},
          { text: "安全项目", link: "/cooperation/recruit/"},
          { text: "开源项目", link: "/cooperation/project/"},
          { text: "自用黑科技", link: "/cooperation/hacking/"}
        ],
      }
    ],
    sidebar:  {
      '/about/': [
        {
          text: '关于文库',
          items: [
            { text: '文库介绍', link: '/about/' },
            { text: '支持项目', link: '/about/support' },
            { text: '使用指南', link: "/about/使用指南" },  
          ]
        }
      ],
      '/web/basis/': [
        {
          text: '基础篇',
          items: [
            { text: '安服工程师基础', link: "/web/basis/安服工程师基础" },
            { text: '弱口令漏洞', link: "/web/basis/弱口令漏洞" },
            { text: '文件上传漏洞', link: "/web/basis/文件上传漏洞" },
            { text: '文件包含漏洞', link: "/web/basis/文件包含漏洞" },
            { text: 'SQL注入漏洞', link: "/web/basis/SQL注入漏洞" },
            { text: 'XSS跨站脚本攻击', link: "/web/basis/XSS跨站脚本攻击" },
            { text: 'CSRF跨站请求伪造', link: "/web/basis/CSRF跨站请求伪造" },
            { text: 'SSRF服务端请求伪造', link: "/web/basis/SSRF服务端请求伪造" },
            { text: 'Linux提权总结', link: "/web/basis/Linux提权总结" },
            { text: '反弹shell备忘录', link: "/web/basis/反弹shell备忘录" },
            { text: 'JAVA内存马研究0到1', link: "/web/basis/JAVA内存马研究0到1" }
          ]
        }
      ],
      '/web/emer/': [
        {
          text: '应急响应篇',
          items: [
            { text: '安全加固指南', link: "/web/emer/linux&windows应急响应" },
            { text: 'linux&windows应急响应', link: "/web/emer/linux&windows应急响应" }
          ]
        }
      ],
      '/web/range/': [
        {
          text: '靶场篇',
          items: [
            { text: 'Vulstudy靶场', link: "/web/range/Vulstudy靶场" },
            { text: 'DVWA通关笔记', link: "/web/range/DVWA通关笔记" },
            { text: 'sqli-labs通关笔记', link: "/web/range/sqli-labs通关笔记" },
            { text: 'upload-labs通关笔记', link: "/web/range/upload-labs通关笔记" },
            { text: 'Vulnhub-acid', link: "/web/range/Vulnhub-acid.md" },
            { text: 'Vulnhub-billub0x', link: "/web/range/Vulnhub-billub0x" },
            { text: 'Vulnhub-Breach1', link: "/web/range/Vulnhub-Breach1" },
            { text: 'Vulnhub-bulldog', link: "/web/range/Vulnhub-bulldog" },
            { text: 'Vulnhub-dc2', link: "/web/range/Vulnhub-dc2" },
            { text: 'Vulnhub-dc9', link: "/web/range/Vulnhub-dc9" },
            { text: 'VulnHub-Kioptrix3', link: "/web/range/VulnHub-Kioptrix3" },
            { text: 'Vulnhub-LazySysAdmin1', link: "/web/range/Vulnhub-LazySysAdmin1" },
            { text: 'Vulnhub-The-Ether', link: "/web/range/Vulnhub-The-Ether" }       
          ]
        }
      ],     
      '/web/tools/': [
        {
          text: '工具篇',
          items: [
            { text: 'Burpsuite安装破解', link: "/web/tools/Burpsuite安装破解" },  
            { text: 'CobaltStrike的使用', link: "/web/tools/CobaltStrike的使用" },
            { text: 'Sqlmap的使用', link: "/web/tools/Sqlmap的使用" },
            { text: 'Nmap的使用', link: "/web/tools/Nmap的使用" },
            { text: 'AWVS的安装破解', link: "/web/tools/AWVS的安装破解" },
            { text: 'Nessus安装破解', link: "/web/tools/Nessus安装破解" },
            { text: 'meterpreter', link: "/web/tools/meterpreter" },
            { text: 'PowerShell攻击指南', link: "/web/tools/PowerShell攻击指南" },  
          ]
        }
      ],
      '/web/cert/': [
        {
          text: '漏洞速递',
          items: [
            { text: '蓝凌EIS8.0前台文件上传', link: "/web/cert/蓝凌EIS8.0前台文件上传" }, 
            { text: '朗新天霁sTalent前台文件上传', link: "/web/cert/朗新天霁sTalent前台文件上传" },
            { text: '浙江宇视科技SQL注入', link: "/web/cert/浙江宇视科技SQL注入" },
            { text: '方略知识管理系统SQL注入', link: "/web/cert/方略知识管理系统SQL注入" },
          ]
        }
      ],

      '/blockchain/': [
        {
          text: '区块链',
          items: [
            { text: "区块链入门",  link: '/blockchain/'},
            { text: "区块链市场", link: '/blockchain/transaction'},
            { text: "区块链安全", link: '/blockchain/bug/'}             
          ]
        }
      ],
      '/blockchain/bug/': [
        {
          text: '区块链安全',
          items: [
            { text: "常见攻击手法详解",  link: '/blockchain/bug/常见攻击手法详解'},
            { text: "历史攻击手法案例", link: '/blockchain/bug/历史攻击手法案例'},
            { text: "待完善", link: '/blockchain/bug/待完善'}             
          ]
        }
      ],
      '/redteam/流量隐匿/': [      
      {
        text: "流量隐匿",
        items: [
            { text: "基于代理池", link: "/redteam/流量隐匿/基于代理池"},
            { text: "基于云函数", link: "/redteam/流量隐匿/基于云函数"},
            { text: "NDAY批量上线", link: "/redteam/流量隐匿/NDAY批量上线"}
          ]
      }
    ],
      '/redteam/免杀对抗/': [      
      {
        text: "免杀对抗",
        items: [
            { text: "免杀技术探讨（一）", link: "/redteam/免杀对抗/免杀技术探讨（一）"},
          ]
      }
    ],
    '/cooperation/project/': [      
      {
        text: "开源项目",
        items: [
            { text: "NGCBot", link: "/cooperation/project/NGCBot"},
            { text: "ckcsecwiki", link: "/cooperation/project/ckcsecwiki"},
          ]
      }
    ],
    '/cooperation/recruit/': [      
      {
        text: "安全项目",
        items: [
            { text: "2025国护招聘", link: "/cooperation/recruit/2025国护招聘"},
            { text: "安全实习生招聘", link: "/cooperation/recruit/安全实习生招聘"},
            { text: "驻场安全服务工程师", link: "/cooperation/recruit/aqzc"},           
          ]
      }
    ],
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ckcsec/wiki-vitepress' }
    ],
    sitemap: {
      hostname: 'https://wiki.ckcsec.cn'
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2021-2024 <a href="http://beian.miit.gov.cn/">鄂公网安备 42108302000084号</a>'
    }
  }
})
