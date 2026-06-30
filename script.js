const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const productSearch = document.querySelector("[data-product-search]");
const productList = document.querySelector("[data-product-list]");
const productEmpty = document.querySelector("[data-product-empty]");
const productDetailPage = document.querySelector("[data-product-detail-page]");
const products = window.PRODUCTS || [];
let currentLanguage = localStorage.getItem("siteLanguage") || "zh";

const translations = {
  zh: {
    pageTitle: "俊杰 | 出口外贸中间体供应",
    metaDescription: "俊杰出口外贸中间体供应网站，覆盖医药、农化、染料、电子化学品等精细化工中间体。",
    brandName: "俊杰",
    brandTag: "Intermediates Export",
    navHome: "主页",
    navCompany: "公司介绍",
    navProducts: "产品资料",
    navRd: "研发和质量",
    navAbout: "关于我们",
    navContact: "联系我们",
    navFaq: "常见问题",
    heroEyebrow: "Fine Chemical Intermediates",
    heroTitle: "出口外贸中间体供应链伙伴",
    heroCopy: "面向医药、农化、染料、电子化学品与定制合成客户，提供稳定货源、质量文件、出口包装和全球交付协同。",
    heroPrimary: "提交询盘",
    heroSecondary: "查看产品资料",
    metricProducts: "可供中间体品类",
    metricMarkets: "出口国家与地区",
    metricLeadtime: "常规订单发货周期",
    homeOverviewKicker: "Supply Focus",
    homeOverviewTitle: "专注中间体出口交付",
    homeOverviewLead: "俊杰是面向全球客户的工厂直产直销型中间体供应企业，整合研发、生产、质量控制、外贸出口和跨境交付能力，为医药、农化、染料、电子化学品和定制合成客户提供一体化服务。",
    homeOverviewPanelTitle: "Factory Direct · R&D · Export",
    homeOverviewCopy: "俊杰围绕中间体采购最关键的产品匹配、质量文件、出口包装和跨境交付建立服务流程。工厂端直接响应规格、批次和交期需求，外贸端同步处理单证、报关、包装和物流，让客户从技术确认到出口交付获得同一团队协同。",
    homeOverviewPillar1Label: "01",
    homeOverviewPillar1Title: "工厂直产直销",
    homeOverviewPillar1Copy: "减少中间环节，直接对接生产、库存、批次、包装和交期。",
    homeOverviewPillar2Label: "02",
    homeOverviewPillar2Title: "研发生产一体",
    homeOverviewPillar2Copy: "从路线评估、样品验证到放大生产，支持定制合成和规格确认。",
    homeOverviewPillar3Label: "03",
    homeOverviewPillar3Title: "外贸出口协同",
    homeOverviewPillar3Copy: "同步处理 COA、MSDS、标签、报关、订舱和目的港文件要求。",
    homeCapabilityKicker: "Capability Platform",
    homeCapabilityTitle: "以研发确认支撑稳定生产",
    homeCapabilityCopy: "从路线评估、样品确认到批次放大，俊杰将研发判断与供应执行连接在同一套项目节奏中，帮助海外客户更快确认可采购、可放大、可出口的中间体方案。",
    homeRdLabel: "Research Capability",
    homeRdTitle: "研发能力",
    homeRdCopy: "支持结构式确认、目标杂质沟通、替代路线评估、样品制备和定制合成前期判断，让询盘在进入报价前完成关键技术确认。",
    homeProductionLabel: "Production Capability",
    homeProductionTitle: "生产能力",
    homeProductionCopy: "结合库存产品、合作产能与订单排产，覆盖小试样品、小批量和吨级交付，并同步确认包装、检测、文件与出口节点。",
    homeIntegrationKicker: "R&D to Delivery",
    homeIntegrationTitle: "把实验室判断转化为可交付订单",
    homeIntegrationCopy: "俊杰关注的不只是“是否有货”，而是从分子结构、纯度指标、实体状态、包装方式到目的港文件要求逐项确认，降低跨境采购中的反复沟通成本。",
    homeProcess1Title: "路线与规格",
    homeProcess1Copy: "确认 CAS、目标纯度、杂质控制和应用场景。",
    homeProcess2Title: "样品与放大",
    homeProcess2Copy: "匹配克级样品、小批量试单和吨级生产节奏。",
    homeProcess3Title: "检测与文件",
    homeProcess3Copy: "准备 COA、MSDS、TDS、标签和批次留样信息。",
    homeProcess4Title: "出口与交付",
    homeProcess4Copy: "协同包装、订舱、报关和物流节点追踪。",
    homeSustainKicker: "Sustainable Development",
    homeSustainTitle: "面向长期供应的可持续发展",
    homeSustainCopy: "中间体供应链的长期稳定来自更审慎的工艺选择、更清晰的安全管理和更负责任的供应协作。俊杰在项目沟通中优先关注资源效率、合规运输和可持续采购风险。",
    homeSustainPoint1: "优先评估更高收率、更低副产物的工艺路径",
    homeSustainPoint2: "关注包装、仓储和危险品运输的合规管理",
    homeSustainPoint3: "为长期客户建立稳定批次和年度供应协同",
    homeCtaRd: "了解研发和质量",
    homeCtaContact: "联系项目团队",
    companyTitle: "公司介绍",
    companyLead: "工厂直产直销，研发、生产、质量控制与外贸出口一体化。",
    companyCopy: "俊杰成立于2016年8月12日，注册资本5000万元人民币，位于河南省许昌市建安区张潘镇精细化工园区，是一家集研发、生产、销售与外贸出口于一体的精细化工中间体企业。公司主营医药中间体助剂、农药中间体及化工辅料等产品，持续推进沙星类母核、抗菌类医药中间体及相关精细化工项目建设，具备从工艺开发、批量生产、质量控制到出口交付的综合服务能力。俊杰拥有多项行政许可，积极参与招投标项目，连续多年保持纳税人信用A级，并被认定为科技型中小企业，长期按规定完成企业年报报送。",
    companyImageTitle: "Fine Chemical Manufacturing",
    companyImageCopy: "以工艺开发、批次生产和出口交付为核心的综合供应能力。",
    companyFact1Label: "成立时间",
    companyFact1Value: "2016年8月12日",
    companyFact2Label: "注册资本",
    companyFact2Value: "5000万元人民币",
    companyFact3Label: "所在园区",
    companyFact3Value: "许昌建安区精细化工园区",
    companyFact4Label: "企业定位",
    companyFact4Value: "研发生产外贸出口一体化",
    companyCapabilityKicker: "Integrated Capability",
    companyCapabilityTitle: "从研发到出口的综合服务能力",
    companyCapabilityCopy: "围绕海外客户对中间体采购的核心需求，俊杰把技术确认、稳定生产、质量文件和外贸交付放在同一套项目流程中管理。",
    companyCard1Label: "R&D",
    companyCard1Title: "工艺研发与样品确认",
    companyCard1Copy: "支持路线评估、样品验证、规格确认和定制合成前期判断。",
    companyCard2Label: "Production",
    companyCard2Title: "批量生产与稳定供应",
    companyCard2Copy: "对接库存、排产、批次、包装和交期，满足样品、小批量和吨级订单。",
    companyCard3Label: "Export",
    companyCard3Title: "质量文件与出口协同",
    companyCard3Copy: "协同 COA、MSDS、标签、报关、订舱、包装照片和目的港文件要求。",
    companyMilestoneKicker: "Development",
    companyMilestoneTitle: "持续建设精细化工中间体能力",
    companyMilestoneCopy: "俊杰围绕医药中间体、农化中间体和相关精细化工产品持续推进项目建设，并通过许可、信用与年报体系保持规范经营。",
    companyMilestone1Title: "公司成立",
    companyMilestone1Copy: "注册资本5000万元人民币，进入精细化工中间体生产与销售领域。",
    companyMilestone2Title: "项目扩建",
    companyMilestone2Copy: "新增医药中间体及相关精细化工建设项目，拓展产品和产能基础。",
    companyMilestone3Title: "抗菌类医药项目推进",
    companyMilestone3Copy: "围绕抗菌类沙星医药中间体项目推进建设，强化规模化供应能力。",
    companyMilestone4Title: "沙星类母核项目获批",
    companyMilestone4Copy: "沙星类母核及其他医药中间体项目取得环评批复，持续完善产品平台。",
    introStat1: "医药中间体",
    introStat2: "农化中间体",
    introStat3: "电子化学品",
    introStat4: "定制合成",
    productsTitle: "产品资料",
    productsCopy: "以下为精简产品目录，可按 CAS、产品名称、纯度、库存状态或定制需求快速筛选；点击产品进入独立详情页查看结构式和理化性质。",
    summaryProducts: "目录产品",
    summaryPurity: "常规纯度",
    summaryStatusValue: "现货 / 定制",
    summaryStatus: "供应状态",
    summaryCapacity: "部分产品月产能",
    searchLabel: "产品搜索",
    searchPlaceholder: "输入产品名称、CAS、现货、定制或 In stock",
    downloadCatalog: "下载英文目录",
    thNo: "序号",
    thName: "产品名称",
    thPurity: "纯度",
    thAppearance: "外观",
    thCapacity: "月产能",
    thStatus: "状态",
    thPrice: "参考价格",
    productNoResults: "没有找到匹配产品。",
    productDataNote: "结构式和理化性质来自 PubChem 公开化学数据，供研发与采购初筛参考；商业订单以 COA/MSDS 和最终规格确认为准。",
    viewDetails: "查看详情",
    productDetails: "产品详情",
    structureFormula: "结构式",
    supplyInfo: "供货信息",
    physChem: "理化性质",
    physicalState: "实体状态",
    catalogNo: "目录序号",
    pubchemSource: "PubChem 来源",
    cidLabel: "PubChem CID",
    formula: "分子式",
    molecularWeight: "分子量",
    exactMass: "精确质量",
    iupac: "IUPAC 名称",
    smiles: "SMILES",
    xlogp: "XLogP",
    tpsa: "TPSA",
    hbd: "氢键供体",
    hba: "氢键受体",
    rotatable: "可旋转键",
    heavyAtoms: "重原子数",
    complexity: "复杂度",
    closeDetails: "关闭",
    backToProducts: "返回产品目录",
    rdTitle: "研发和质量",
    rdCopy: "围绕小试样品、工艺放大、批次检测和出口合规文件，建立从研发确认到商业化交付的质量闭环。",
    rdItem1Title: "研发支持",
    rdItem1Copy: "根据结构式、目标杂质、纯度要求和应用场景匹配定制合成或替代路线。",
    rdItem2Title: "规格确认",
    rdItem2Copy: "按纯度、水分、灰分、色度、粒径、残留溶剂等指标筛选并锁定批次标准。",
    rdItem3Title: "质量文件",
    rdItem3Copy: "提供 COA、MSDS、TDS、第三方检测、留样记录及客户专属质量模板。",
    rdItem4Title: "合规判断",
    rdItem4Copy: "配合运输分类、GHS 标签、危险品包装、报关编码与目的港文件要求。",
    aboutTitle: "关于我们",
    aboutCopy: "我们相信外贸中间体业务的核心不是只报一个价格，而是持续确认货源、指标、文件和交付节点。团队长期服务化工出口项目，熟悉样品、小批量、吨级订单和集装箱发运的不同节奏。",
    principlesTitle: "我们的服务原则",
    principle1: "先确认规格和应用，再匹配价格与交期",
    principle2: "每批订单保留质量文件和包装记录",
    principle3: "对危险品、监管条件和运输限制提前沟通",
    principle4: "为长期客户建立稳定批次与年度供应方案",
    processTitle: "询盘到交付",
    step1Title: "确认需求",
    step1Copy: "提供 CAS、规格、数量、目的港、用途或质量标准。",
    step2Title: "报价与样品",
    step2Copy: "匹配库存或产能，确认价格、交期、包装和样品安排。",
    step3Title: "生产与检测",
    step3Copy: "按订单执行批次生产、留样、检测和文件准备。",
    step4Title: "出口交付",
    step4Copy: "完成包装、订舱、报关、单证和物流跟踪。",
    contactTitle: "联系我们",
    contactCopy: "请尽量附上 CAS、目标纯度、采购数量、目的国家、期望贸易条款和是否需要样品。我们会在 24 小时内回复可供方案。",
    formName: "姓名 / 公司",
    formEmail: "邮箱",
    formMessage: "产品信息",
    formSubmit: "提交询盘",
    faqTitle: "常见问题",
    faqCopy: "以下是海外客户在中间体询盘、样品、文件和运输环节最常见的问题。",
    faq1Title: "询盘需要提供哪些信息？",
    faq1Copy: "建议提供 CAS、产品名称、目标纯度、采购数量、目的国家、用途、包装要求和期望贸易条款。",
    faq2Title: "是否可以先寄样品？",
    faq2Copy: "常规产品可安排克级或公斤级样品；定制产品需先确认路线、周期、规格和样品费用。",
    faq3Title: "可以提供哪些质量文件？",
    faq3Copy: "通常可提供 COA、MSDS、TDS、包装照片、标签、装箱单和发票，必要时配合第三方检测。",
    faq4Title: "危险品可以出口吗？",
    faq4Copy: "可以根据货物分类、包装等级、UN 编号、目的港规则和承运渠道评估可行方案。",
    footerCompany: "俊杰",
    footerTag: "精细化学品 · 中间体 · 全球贸易",
  },
  en: {
    pageTitle: "Junjie | Export Intermediates Supplier",
    metaDescription: "Junjie supplies fine chemical and pharmaceutical intermediates for global export markets.",
    brandName: "Junjie",
    brandTag: "Intermediates Export",
    navHome: "Home",
    navCompany: "Company",
    navProducts: "Products",
    navRd: "R&D & Quality",
    navAbout: "About",
    navContact: "Contact",
    navFaq: "FAQ",
    heroEyebrow: "Fine Chemical Intermediates",
    heroTitle: "Export Intermediates Supply Chain Partner",
    heroCopy: "For pharmaceutical, agrochemical, dye, electronic chemical and custom synthesis customers, we coordinate reliable sourcing, quality documents, export packaging and global delivery.",
    heroPrimary: "Send Inquiry",
    heroSecondary: "View Products",
    metricProducts: "Available intermediates",
    metricMarkets: "Export markets",
    metricLeadtime: "Typical shipment lead time",
    homeOverviewKicker: "Supply Focus",
    homeOverviewTitle: "Focused on Export Intermediates Delivery",
    homeOverviewLead: "Junjie is a factory-direct intermediate supplier for global customers, integrating R&D, production, quality control, foreign trade export and cross-border delivery for pharmaceutical, agrochemical, dye, electronic chemical and custom synthesis customers.",
    homeOverviewPanelTitle: "Factory Direct · R&D · Export",
    homeOverviewCopy: "Junjie structures its service around product matching, quality documents, export packaging and cross-border delivery. Factory-side teams respond directly to specification, batch and lead-time requirements, while the export team coordinates documents, customs, packaging and logistics.",
    homeOverviewPillar1Label: "01",
    homeOverviewPillar1Title: "Factory Direct Supply",
    homeOverviewPillar1Copy: "Reduce intermediate layers and connect directly with production, stock, batch, packaging and delivery schedules.",
    homeOverviewPillar2Label: "02",
    homeOverviewPillar2Title: "Integrated R&D and Production",
    homeOverviewPillar2Copy: "Support route assessment, sample validation, scale-up production, custom synthesis and specification confirmation.",
    homeOverviewPillar3Label: "03",
    homeOverviewPillar3Title: "Export Coordination",
    homeOverviewPillar3Copy: "Coordinate COA, MSDS, labels, customs clearance, booking and destination-port documentation requirements.",
    homeCapabilityKicker: "Capability Platform",
    homeCapabilityTitle: "R&D confirmation behind stable production",
    homeCapabilityCopy: "From route assessment and sample confirmation to batch scale-up, Junjie connects technical judgement with supply execution so overseas customers can confirm purchasable, scalable and export-ready intermediate solutions faster.",
    homeRdLabel: "Research Capability",
    homeRdTitle: "R&D Capability",
    homeRdCopy: "We support structure confirmation, target impurity discussion, alternative route assessment, sample preparation and early custom synthesis evaluation before an inquiry moves into quotation.",
    homeProductionLabel: "Production Capability",
    homeProductionTitle: "Production Capability",
    homeProductionCopy: "By coordinating stocked products, partner capacity and order scheduling, we support lab samples, small batches and ton-level supply while aligning packaging, testing, documents and export milestones.",
    homeIntegrationKicker: "R&D to Delivery",
    homeIntegrationTitle: "Turning lab decisions into deliverable orders",
    homeIntegrationCopy: "Junjie looks beyond simple stock availability. We confirm molecular structure, purity targets, physical state, packaging mode and destination-port documentation to reduce repeated communication in cross-border procurement.",
    homeProcess1Title: "Route and Specification",
    homeProcess1Copy: "Confirm CAS, target purity, impurity control and application scenario.",
    homeProcess2Title: "Sample and Scale-up",
    homeProcess2Copy: "Match gram-level samples, small trial orders and ton-level production rhythm.",
    homeProcess3Title: "Testing and Documents",
    homeProcess3Copy: "Prepare COA, MSDS, TDS, labels and retained batch information.",
    homeProcess4Title: "Export and Delivery",
    homeProcess4Copy: "Coordinate packaging, booking, customs clearance and logistics tracking.",
    homeSustainKicker: "Sustainable Development",
    homeSustainTitle: "Sustainable development for long-term supply",
    homeSustainCopy: "Long-term stability in intermediate supply chains comes from more disciplined process choices, clearer safety management and responsible supplier collaboration. Junjie prioritizes resource efficiency, compliant transport and sustainable sourcing risk in project communication.",
    homeSustainPoint1: "Prioritize routes with higher yield and lower by-product burden",
    homeSustainPoint2: "Focus on compliant packaging, storage and dangerous goods transport",
    homeSustainPoint3: "Build stable batches and annual supply coordination for long-term customers",
    homeCtaRd: "Explore R&D and Quality",
    homeCtaContact: "Contact Project Team",
    companyTitle: "Company Profile",
    companyLead: "Factory-direct supply with integrated R&D, production, quality control and export delivery.",
    companyCopy: "Founded on August 12, 2016 with registered capital of RMB 50 million, Junjie is located in the Fine Chemical Park of Zhangpan Town, Jian'an District, Xuchang, Henan Province. The company is an integrated fine chemical intermediates enterprise covering R&D, production, sales and foreign trade export. Junjie focuses on pharmaceutical intermediate auxiliaries, agrochemical intermediates and chemical auxiliaries, while continuously advancing quinolone core, antibacterial pharmaceutical intermediate and related fine chemical projects. With capabilities across process development, batch production, quality control and export delivery, Junjie holds multiple administrative licenses, participates in tendering projects, has maintained Grade-A taxpayer credit for consecutive years, and is recognized as a technology-based small and medium-sized enterprise.",
    companyImageTitle: "Fine Chemical Manufacturing",
    companyImageCopy: "Integrated capability centered on process development, batch production and export delivery.",
    companyFact1Label: "Founded",
    companyFact1Value: "August 12, 2016",
    companyFact2Label: "Registered Capital",
    companyFact2Value: "RMB 50 million",
    companyFact3Label: "Industrial Park",
    companyFact3Value: "Fine Chemical Park, Jian'an, Xuchang",
    companyFact4Label: "Positioning",
    companyFact4Value: "Integrated R&D, production and export",
    companyCapabilityKicker: "Integrated Capability",
    companyCapabilityTitle: "Integrated service capability from R&D to export",
    companyCapabilityCopy: "For the core needs of overseas intermediate procurement, Junjie manages technical confirmation, stable production, quality documentation and export delivery within one project workflow.",
    companyCard1Label: "R&D",
    companyCard1Title: "Process R&D and Sample Confirmation",
    companyCard1Copy: "Support route assessment, sample validation, specification confirmation and early custom synthesis evaluation.",
    companyCard2Label: "Production",
    companyCard2Title: "Batch Production and Stable Supply",
    companyCard2Copy: "Coordinate stock, scheduling, batches, packaging and lead times for samples, small batches and ton-level orders.",
    companyCard3Label: "Export",
    companyCard3Title: "Quality Documents and Export Coordination",
    companyCard3Copy: "Coordinate COA, MSDS, labels, customs clearance, booking, packaging photos and destination-port documentation.",
    companyMilestoneKicker: "Development",
    companyMilestoneTitle: "Continuous development of intermediate capabilities",
    companyMilestoneCopy: "Junjie continues to advance pharmaceutical intermediates, agrochemical intermediates and related fine chemical projects while maintaining compliant operations through licensing, credit and annual reporting systems.",
    companyMilestone1Title: "Company Founded",
    companyMilestone1Copy: "Established with registered capital of RMB 50 million, entering the production and sales of fine chemical intermediates.",
    companyMilestone2Title: "Project Expansion",
    companyMilestone2Copy: "Added pharmaceutical intermediate and related fine chemical projects to expand product and capacity foundations.",
    companyMilestone3Title: "Antibacterial Pharma Project",
    companyMilestone3Copy: "Advanced antibacterial quinolone pharmaceutical intermediate projects to strengthen scaled supply capability.",
    companyMilestone4Title: "Quinolone Core Project Approved",
    companyMilestone4Copy: "The quinolone core and other pharmaceutical intermediate project received environmental approval, improving the product platform.",
    introStat1: "Pharma Intermediates",
    introStat2: "Agrochemical Intermediates",
    introStat3: "Electronic Chemicals",
    introStat4: "Custom Synthesis",
    productsTitle: "Product Catalogue",
    productsCopy: "This is a streamlined product catalogue. Search by CAS, product name, purity, stock status or made-to-order requirement, then open each product page for structure and physicochemical details.",
    summaryProducts: "Catalogued products",
    summaryPurity: "Typical purity",
    summaryStatusValue: "Stock / Custom",
    summaryStatus: "Supply status",
    summaryCapacity: "Monthly capacity for selected items",
    searchLabel: "Product Search",
    searchPlaceholder: "Search product name, CAS, In stock or Made-to-order",
    downloadCatalog: "Download English Catalog",
    thNo: "No.",
    thName: "Product Name",
    thPurity: "Purity",
    thAppearance: "Appearance",
    thCapacity: "Capacity / month",
    thStatus: "Status",
    thPrice: "Reference Price",
    productNoResults: "No matching products found.",
    productDataNote: "Structural images and physicochemical properties are based on public PubChem data for R&D and procurement screening. Commercial orders should be confirmed by COA/MSDS and final specifications.",
    viewDetails: "View Details",
    productDetails: "Product Details",
    structureFormula: "Structure",
    supplyInfo: "Supply Information",
    physChem: "Physicochemical Properties",
    physicalState: "Physical State",
    catalogNo: "Catalog No.",
    pubchemSource: "PubChem Source",
    cidLabel: "PubChem CID",
    formula: "Formula",
    molecularWeight: "Molecular Weight",
    exactMass: "Exact Mass",
    iupac: "IUPAC Name",
    smiles: "SMILES",
    xlogp: "XLogP",
    tpsa: "TPSA",
    hbd: "H-bond Donors",
    hba: "H-bond Acceptors",
    rotatable: "Rotatable Bonds",
    heavyAtoms: "Heavy Atoms",
    complexity: "Complexity",
    closeDetails: "Close",
    backToProducts: "Back to Product Catalogue",
    rdTitle: "R&D and Quality",
    rdCopy: "From lab samples and process scale-up to batch testing and export compliance documents, we build a quality loop from R&D confirmation to commercial delivery.",
    rdItem1Title: "R&D Support",
    rdItem1Copy: "Match custom synthesis or alternative routes based on structure, target impurities, purity requirements and application scenario.",
    rdItem2Title: "Specification Confirmation",
    rdItem2Copy: "Screen and lock batch standards by purity, moisture, ash, color, particle size, residual solvents and other indicators.",
    rdItem3Title: "Quality Documents",
    rdItem3Copy: "Provide COA, MSDS, TDS, third-party testing support, retained sample records and customer-specific templates.",
    rdItem4Title: "Compliance Review",
    rdItem4Copy: "Support transport classification, GHS labels, dangerous goods packaging, customs codes and destination-port documentation.",
    aboutTitle: "About Us",
    aboutCopy: "We believe export intermediates are not only about quoting a price. The real work is to keep confirming source, specification, documents and delivery milestones. Our team supports chemical export projects across samples, small batches, ton-level orders and container shipments.",
    principlesTitle: "Our Service Principles",
    principle1: "Confirm specifications and application before matching price and lead time",
    principle2: "Keep quality documents and packaging records for each batch",
    principle3: "Communicate dangerous goods, regulatory conditions and transport restrictions early",
    principle4: "Build stable batch and annual supply plans for long-term customers",
    processTitle: "Inquiry to Delivery",
    step1Title: "Confirm Requirements",
    step1Copy: "Share CAS, specification, quantity, destination port, application or quality standard.",
    step2Title: "Quote and Samples",
    step2Copy: "Match stock or capacity, then confirm price, lead time, packaging and sample arrangement.",
    step3Title: "Production and Testing",
    step3Copy: "Execute batch production, retained samples, testing and document preparation.",
    step4Title: "Export Delivery",
    step4Copy: "Complete packaging, booking, customs clearance, documents and logistics tracking.",
    contactTitle: "Contact Us",
    contactCopy: "Please include CAS, target purity, purchase quantity, destination country, preferred trade term and whether samples are required. We will reply with an available solution within 24 hours.",
    formName: "Name / Company",
    formEmail: "Email",
    formMessage: "Product Information",
    formSubmit: "Send Inquiry",
    faqTitle: "FAQ",
    faqCopy: "Common questions from overseas customers about intermediates inquiries, samples, documents and shipping.",
    faq1Title: "What information should I provide for an inquiry?",
    faq1Copy: "Please provide CAS, product name, target purity, purchase quantity, destination country, application, packaging requirements and preferred trade terms.",
    faq2Title: "Can you send samples first?",
    faq2Copy: "For regular products, gram-level or kilogram-level samples can be arranged. Custom products require route, timeline, specification and sample cost confirmation first.",
    faq3Title: "What quality documents can you provide?",
    faq3Copy: "We usually provide COA, MSDS, TDS, packaging photos, labels, packing list and invoice, with third-party testing support when needed.",
    faq4Title: "Can dangerous goods be exported?",
    faq4Copy: "We evaluate feasible options based on cargo classification, packing group, UN number, destination-port rules and available carriers.",
    footerCompany: "Junjie",
    footerTag: "Fine chemicals · Intermediates · Global trade",
  },
};

const tableTerms = {
  zh: {
    "In stock": "现货",
    "Made-to-order": "定制",
    "By inquiry": "询价确认",
  },
  en: {
    "In stock": "In stock",
    "Made-to-order": "Made-to-order",
    "By inquiry": "By inquiry",
  },
};

const physicalStateTerms = {
  zh: {
    solid: "固体",
    liquid: "液体",
    inquiry: "待确认",
  },
  en: {
    solid: "Solid",
    liquid: "Liquid",
    inquiry: "To be confirmed",
  },
};

const syncHeader = () => {
  const isInteriorPage = Boolean(document.querySelector(".page-main"));
  header.classList.toggle("is-scrolled", window.scrollY > 12 || isInteriorPage);
};

const localizeValue = (value, language) => {
  if (language === "en") {
    return value;
  }

  if (tableTerms.zh[value]) {
    return tableTerms.zh[value];
  }

  if (value.startsWith("About RMB")) {
    return value.replace("About RMB", "约人民币");
  }

  if (value.startsWith("RMB")) {
    return value.replace("RMB", "人民币");
  }

  return value;
};

const getDictionary = () => translations[currentLanguage] || translations.zh;

const productSearchIndex = (product) => {
  const english = [
    product.no,
    product.name,
    product.cas,
    product.purity,
    product.appearance,
    product.capacity,
    product.status,
    product.price,
    product.properties.formula,
    product.properties.iupac,
    product.properties.smiles,
  ].join(" ");

  const chineseAliases = english
    .replaceAll("In stock", "现货 In stock")
    .replaceAll("Made-to-order", "定制 Made-to-order")
    .replaceAll("By inquiry", "询价确认 By inquiry");

  return `${english} ${chineseAliases}`.toLowerCase();
};

const productPageFile = (product) => `product-${String(product.no).padStart(2, "0")}.html`;

const filterProducts = () => {
  const cards = [...document.querySelectorAll("[data-product-card]")];
  if (!productSearch || !cards.length) {
    return;
  }

  const query = productSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const isHidden = Boolean(query && !card.dataset.search.includes(query));
    card.classList.toggle("is-hidden", isHidden);
    if (!isHidden) {
      visibleCount += 1;
    }
  });

  if (productEmpty) {
    productEmpty.hidden = visibleCount > 0;
  }
};

const propertyRows = (product, dictionary) => [
  [dictionary.formula, product.properties.formula],
  [dictionary.molecularWeight, product.properties.molecularWeight],
  [dictionary.exactMass, product.properties.exactMass],
  [dictionary.xlogp, product.properties.xlogp],
  [dictionary.tpsa, product.properties.tpsa],
  [dictionary.hbd, product.properties.hBondDonorCount],
  [dictionary.hba, product.properties.hBondAcceptorCount],
  [dictionary.rotatable, product.properties.rotatableBondCount],
  [dictionary.heavyAtoms, product.properties.heavyAtomCount],
  [dictionary.complexity, product.properties.complexity],
];

const renderProducts = () => {
  if (!productList || !products.length) {
    return;
  }

  const dictionary = getDictionary();
  productList.innerHTML = products
    .map((product) => {
      const state = physicalStateTerms[currentLanguage][product.physicalState] || product.physicalState;
      const status = localizeValue(product.status, currentLanguage);
      const capacity = localizeValue(product.capacity, currentLanguage);
      const formula = product.properties.formula || "-";

      return `
        <article class="product-summary-card" data-product-card data-product-no="${product.no}" data-search="${productSearchIndex(product)}">
          <div class="product-card-topline">
            <span>${dictionary.catalogNo} ${product.no}</span>
            <span>${status}</span>
          </div>
          <h3>${product.name}</h3>
          <dl class="product-card-meta compact">
            <div><dt>CAS</dt><dd>${product.cas}</dd></div>
            <div><dt>${dictionary.formula}</dt><dd>${formula}</dd></div>
            <div><dt>${dictionary.physicalState}</dt><dd>${state}</dd></div>
            <div><dt>${dictionary.thPurity}</dt><dd>${product.purity}</dd></div>
            <div><dt>${dictionary.thCapacity}</dt><dd>${capacity}</dd></div>
          </dl>
          <a class="button product-detail-button" href="${productPageFile(product)}">${dictionary.viewDetails}</a>
        </article>
      `;
    })
    .join("");

  filterProducts();
};

const detailItem = (label, value) => `
  <div>
    <dt>${label}</dt>
    <dd>${value === "" || value === undefined || value === null ? "-" : value}</dd>
  </div>
`;

const renderProductDetailPage = () => {
  if (!productDetailPage) {
    return;
  }

  const product = products.find((item) => String(item.no) === productDetailPage.dataset.productDetailPage);
  const dictionary = getDictionary();

  if (!product) {
    productDetailPage.innerHTML = `<p class="product-empty">${dictionary.productNoResults}</p>`;
    return;
  }

  const state = physicalStateTerms[currentLanguage][product.physicalState] || product.physicalState;
  const status = localizeValue(product.status, currentLanguage);
  const capacity = localizeValue(product.capacity, currentLanguage);
  const price = localizeValue(product.price, currentLanguage);
  const appearance = localizeValue(product.appearance, currentLanguage);

  document.title = `${product.name} | ${dictionary.brandName}`;
  productDetailPage.innerHTML = `
    <a class="product-page-back" href="products.html">${dictionary.backToProducts}</a>
    <header class="product-detail-header">
      <p>${dictionary.productDetails}</p>
      <h1 id="product-page-title">${product.name}</h1>
      <span>CAS ${product.cas}</span>
    </header>
    <div class="product-detail-layout">
      <section class="detail-structure-panel">
        <h3>${dictionary.structureFormula}</h3>
        <img src="${product.structureImage}" alt="${product.name} structure" />
        <a href="${product.pubchemUrl}" target="_blank" rel="noreferrer">${dictionary.pubchemSource}: ${dictionary.cidLabel} ${product.cid}</a>
      </section>
      <section>
        <h3>${dictionary.supplyInfo}</h3>
        <dl class="detail-grid compact">
          ${detailItem(dictionary.catalogNo, product.no)}
          ${detailItem("CAS", product.cas)}
          ${detailItem(dictionary.thPurity, product.purity)}
          ${detailItem(dictionary.thAppearance, appearance)}
          ${detailItem(dictionary.physicalState, state)}
          ${detailItem(dictionary.thCapacity, capacity)}
          ${detailItem(dictionary.thStatus, status)}
          ${detailItem(dictionary.thPrice, price)}
        </dl>
      </section>
    </div>
    <section class="detail-section">
      <h3>${dictionary.physChem}</h3>
      <dl class="detail-grid">
        ${propertyRows(product, dictionary).map(([label, value]) => detailItem(label, value)).join("")}
      </dl>
    </section>
    <section class="detail-section">
      <h3>${dictionary.iupac}</h3>
      <p class="chemical-string">${product.properties.iupac || "-"}</p>
      <h3>${dictionary.smiles}</h3>
      <p class="chemical-string">${product.properties.smiles || "-"}</p>
    </section>
    <div class="product-note detail-note"><span>${dictionary.productDataNote}</span></div>
  `;
};

const setLanguage = (language) => {
  currentLanguage = language;
  const dictionary = translations[language] || translations.zh;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-label]").forEach((label) => {
    const key = label.dataset.i18nLabel;
    if (!dictionary[key]) {
      return;
    }

    const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
    if (textNode) {
      textNode.textContent = `${dictionary[key]} `;
    }
  });

  renderProducts();
  renderProductDetailPage();

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === language);
  });

  navToggle.setAttribute("aria-label", language === "zh" ? "打开导航" : "Open navigation");
  localStorage.setItem("siteLanguage", language);
  filterProducts();
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  const language = localStorage.getItem("siteLanguage") || "zh";
  navToggle.setAttribute("aria-label", isOpen ? (language === "zh" ? "关闭导航" : "Close navigation") : (language === "zh" ? "打开导航" : "Open navigation"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-label", (localStorage.getItem("siteLanguage") || "zh") === "zh" ? "打开导航" : "Open navigation");
  });
});

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langSwitch);
  });
});

if (productSearch && products.length) {
  productSearch.addEventListener("input", filterProducts);
}

setLanguage(localStorage.getItem("siteLanguage") || "zh");
