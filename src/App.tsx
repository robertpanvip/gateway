import './App.css';

const heroTags = ['Open Source', 'Rsbuild', 'Vite', 'IntelliJ IDEA'];

const engineeringHighlights = [
  {
    title: '构建工具生态扩展',
    description: '围绕 Rsbuild、Vite 等现代工具链打造更顺手的插件体验，覆盖代理、Lint 和开发流程增强。',
  },
  {
    title: '高性能工程能力',
    description: '把 Rust lint 生态接入前端开发工作流，在反馈速度、集成体验和配置边界之间做平衡。',
  },
  {
    title: 'IDE 开发体验增强',
    description: '针对 IntelliJ IDEA 的高频场景设计插件，让国际化、样式、SVG 和类型生成更高效。',
  },
  {
    title: '偏产品化的实现思路',
    description: '不仅关注功能可用，也关注默认配置、交互细节和真实开发环境下的问题收口。',
  },
];

const rsbuildPlugins = [
  {
    name: 'rsbuild-plugin-oxlint',
    description: '把高性能 Rust lint 能力接进 Rsbuild 开发流，保存文件即可得到终端与浏览器双端反馈。',
    href: 'https://github.com/robertpanvip/rsbuild-plugin-oxlint',
  },
  {
    name: 'rsbuild-plugin-biome',
    description: '为 Rsbuild 提供 Biome 驱动的代码质量检查，兼顾性能、配置灵活性与即插即用体验。',
    href: 'https://github.com/robertpanvip/rsbuild-plugin-biome',
  },
  {
    name: 'rsbuild-plugin-rslint',
    description: '将 Rslint 集成进 Rsbuild 工作流，延续统一的插件封装方式与实时错误展示。',
    href: 'https://github.com/robertpanvip/rsbuild-plugin-rslint',
  },
];

const ideaPlugins = [
  {
    name: 'DashStyle',
    icon: 'https://plugins.jetbrains.com/files/29485/980694/icon/default.svg',
    accent: 'accent-dashstyle',
    href: 'https://plugins.jetbrains.com/search?search=DashStyle',
    meta: 'JetBrains Marketplace',
    description: '增强 CSS Modules 的字符串键访问体验，为 kebab-case 类名提供补全、跳转与更顺滑的编辑支持。',
  },
  {
    name: 'SvgEazy',
    icon: 'https://plugins.jetbrains.com/files/29537/990474/icon/default.svg',
    accent: 'accent-svgeazy',
    href: 'https://plugins.jetbrains.com/plugin/29537-svgeasy',
    meta: 'JetBrains Marketplace',
    description: '把 SVG 预览、交互和优化能力带进 IntelliJ IDEA，让图标资产处理更直接。',
  },
  {
    name: 'Json2Typescript',
    icon: 'https://plugins.jetbrains.com/files/29947/942571/icon/default.svg',
    accent: 'accent-json2ts',
    href: 'https://plugins.jetbrains.com/search?search=Json2Typescript',
    meta: 'JetBrains Marketplace',
    description: '将复制的 JSON 一键转换成 TypeScript 类型定义，适合接口响应建模与前端联调。',
  },
  {
    name: 'i18n-extractor',
    icon: 'https://plugins.jetbrains.com/files/29998/990426/icon/default.svg',
    accent: 'accent-i18n',
    href: 'https://plugins.jetbrains.com/search?search=i18n-extractor',
    meta: 'JetBrains Marketplace',
    description: '面向国际化提取场景的 IDEA 插件，服务多语言项目中的文案收集与整理流程。',
  },
  {
    name: 'volta-easy',
    icon: '	https://plugins.jetbrains.com/files/30095/1113760/icon/default.svg',
    accent: 'accent-volta',
    href: 'https://plugins.jetbrains.com/search?search=volta-easy',
    meta: 'JetBrains Marketplace',
    description: '围绕 Volta 使用体验打造的 IDEA 插件入口，让 Node 工具链切换和项目感知更自然。',
  }];

const links = {
  profile: 'https://github.com/robertpanvip',
  spotlight: 'https://github.com/robertpanvip/plugin-cra-proxy',
  lintSuite: 'https://github.com/robertpanvip/rsbuild-plugin-oxlint',
};

const App = () => {
  return (
    <main className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <section className="hero">
        <div className="hero-copy">
          <div className="tag-row">
            {heroTags.map((tag) => (
              <span className="tag-chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <p className="eyebrow">Robert Pan / robertpanvip</p>
          <h1>把开发体验做成真正顺手的开源工具。</h1>
          <p className="hero-text">
            这里展示我持续打磨的开源项目矩阵，重点围绕构建工具扩展、工程质量和 IDE
            效率增强三条方向，把那些开发中高频、重复、又容易卡手的环节做得更自然。
          </p>

          <div className="hero-actions">
            <a className="primary-button" href={links.profile} target="_blank" rel="noreferrer">
              浏览开源项目
            </a>
            <a className="ghost-button" href={links.spotlight} target="_blank" rel="noreferrer">
              查看代表项目
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card panel-card-featured">
            <span className="panel-label">Overview</span>
            <h2>Open Source Matrix</h2>
            <p>
              从 <strong>Rsbuild / Vite</strong> 插件到 <strong>IntelliJ IDEA</strong> 插件，我更关注开发体验中的连接点与细节打磨。
            </p>
            <ul className="panel-points">
              <li>构建链路插件：代理、Lint、开发流程增强</li>
              <li>IDEA 插件：国际化、样式智能、SVG 优化、类型生成</li>
              <li>偏向解决真实场景中的摩擦，而不是只展示功能点</li>
              <li>希望每个项目都具备即插即用和低理解成本</li>
            </ul>
          </div>

          <div className="panel-grid">
            <div className="panel-card">
              <span className="panel-value">2</span>
              <span className="panel-title">Tooling Directions</span>
              <p>一条偏构建工具插件，一条偏 IntelliJ IDEA 效率增强。</p>
            </div>
            <div className="panel-card">
              <span className="panel-value">7+</span>
              <span className="panel-title">Highlighted Projects</span>
              <p>覆盖代理、Lint、i18n、CSS Modules、SVG 与类型生成。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Open Source Focus</p>
          <h2>我更在意的是开发体验，而不是单个项目的曝光。</h2>
          <p>
            这些项目虽然分布在不同方向，但底层关注点是一致的：降低接入成本、提升反馈速度、减少开发过程中的切换和摩擦。
          </p>
        </div>

        <div className="feature-grid">
          {engineeringHighlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Rsbuild Plugins</p>
          <h2>围绕构建链路的高性能插件组</h2>
          <p>
            这组项目不抢主角位置，但能很好地证明你在工程化领域的连续输出能力，尤其是对性能、反馈速度和插件封装边界的理解。
          </p>
        </div>

        <div className="project-grid">
          {rsbuildPlugins.map((item) => (
            <a
              className="project-link-card"
              href={item.href}
              key={item.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`查看 ${item.name}`}
            >
              <article className="project-card">
                <p className="card-kicker">Rsbuild Plugin</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            </a>
          ))}
        </div>

        <a className="text-link" href={links.lintSuite} target="_blank" rel="noreferrer">
          查看 Rsbuild lint plugin 集合
        </a>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">IDEA Plugins</p>
          <h2>把工程效率延伸到 IntelliJ IDEA</h2>
          <p>
            除了构建工具链，你也在 IDE 插件方向持续输出，覆盖国际化提取、CSS Modules 体验增强、SVG 优化和
            JSON 转 TypeScript 等高频开发动作。
          </p>
        </div>

        <div className="project-grid project-grid-ideas">
          {ideaPlugins.map((item) => (
            <a
              className="project-link-card"
              href={item.href}
              key={item.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`查看 ${item.name}`}
            >
              <article className="project-card project-card-idea">
                <div className="plugin-card-top">
                  <span className={`plugin-icon ${item.accent}`}>
                    <img width={60} height={60} src={item.icon} alt={item.name} />
                  </span>
                  <p className="card-kicker">{item.meta}</p>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
