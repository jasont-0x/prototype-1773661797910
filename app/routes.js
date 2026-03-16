const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function generateReference (prefix) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let ref = prefix + '-'
  for (let i = 0; i < 8; i++) {
    ref += chars[Math.floor(Math.random() * chars.length)]
  }
  return ref
}

router.get('/', function (req, res) {
  res.redirect('/start')
})

router.get('/applicant-type', function (req, res) {
  res.render('applicant-type')
})

router.post('/applicant-type', function (req, res) {
  const answer = req.session.data['applicant-type']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'applicant-type': 'Select whether you are applying for the UK domestic industry.' }
    return res.render('applicant-type')
  }
  if (answer === 'no-i-m-applying-as-an-individual-company') {
    return res.redirect('/ineligible-applicant-type')
  }
  res.redirect('/industry-support-percentage')
})

router.get('/ineligible-applicant-type', function (req, res) {
  res.render('ineligible-applicant-type')
})

router.get('/industry-support-percentage', function (req, res) {
  res.render('industry-support-percentage')
})

router.post('/industry-support-percentage', function (req, res) {
  const answer = req.session.data['industry-support-percentage']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'industry-support-percentage': 'Select what percentage of UK production the supporting producers represent.' }
    return res.render('industry-support-percentage')
  }
  if (answer === 'between-10-and-24-of-total-uk-production') {
    return res.redirect('/ineligible-industry-support-percentage')
  }
  res.redirect('/support-opposition-ratio')
})

router.get('/ineligible-industry-support-percentage', function (req, res) {
  res.render('ineligible-industry-support-percentage')
})

router.get('/support-opposition-ratio', function (req, res) {
  res.render('support-opposition-ratio')
})

router.post('/support-opposition-ratio', function (req, res) {
  const answer = req.session.data['support-opposition-ratio']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'support-opposition-ratio': 'Select whether supporting producers represent more than 50% of those who have expressed a view.' }
    return res.render('support-opposition-ratio')
  }
  if (answer === 'no-supporters-are-50-or-less') {
    return res.redirect('/ineligible-support-opposition-ratio')
  }
  res.redirect('/like-goods-confirmation')
})

router.get('/ineligible-support-opposition-ratio', function (req, res) {
  res.render('ineligible-support-opposition-ratio')
})

router.get('/like-goods-confirmation', function (req, res) {
  res.render('like-goods-confirmation')
})

router.post('/like-goods-confirmation', function (req, res) {
  const answer = req.session.data['like-goods-confirmation']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'like-goods-confirmation': 'Select whether you produce goods similar to the imported goods.' }
    return res.render('like-goods-confirmation')
  }
  if (answer === 'no-our-goods-are-quite-different') {
    return res.redirect('/ineligible-like-goods-confirmation')
  }
  res.redirect('/uk-manufacturing-process')
})

router.get('/ineligible-like-goods-confirmation', function (req, res) {
  res.render('ineligible-like-goods-confirmation')
})

router.get('/uk-manufacturing-process', function (req, res) {
  res.render('uk-manufacturing-process')
})

router.post('/uk-manufacturing-process', function (req, res) {
  const answer = req.session.data['uk-manufacturing-process']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'uk-manufacturing-process': 'Select whether at least one substantial manufacturing process happens in the UK.' }
    return res.render('uk-manufacturing-process')
  }
  if (answer === 'no-only-minor-processes-happen-in-the-uk') {
    return res.redirect('/ineligible-uk-manufacturing-process')
  }
  res.redirect('/material-injury-type')
})

router.get('/ineligible-uk-manufacturing-process', function (req, res) {
  res.render('ineligible-uk-manufacturing-process')
})

router.get('/material-injury-type', function (req, res) {
  res.render('material-injury-type')
})

router.post('/material-injury-type', function (req, res) {
  const answer = req.session.data['material-injury-type']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'material-injury-type': 'Select what type of harm the imported goods are causing.' }
    return res.render('material-injury-type')
  }
  if (answer === 'no-current-injury-but-unfair-competition') {
    return res.redirect('/ineligible-material-injury-type')
  }
  res.redirect('/company-name')
})

router.get('/ineligible-material-injury-type', function (req, res) {
  res.render('ineligible-material-injury-type')
})

router.get('/company-name', function (req, res) {
  res.render('company-name')
})

router.post('/company-name', function (req, res) {
  const answer = req.session.data['company-name']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'company-name': 'Enter your company name.' }
    return res.render('company-name')
  }
  res.redirect('/contact-name')
})

router.get('/contact-name', function (req, res) {
  res.render('contact-name')
})

router.post('/contact-name', function (req, res) {
  const answer = req.session.data['contact-name']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'contact-name': 'Enter the main contact person\'s name.' }
    return res.render('contact-name')
  }
  res.redirect('/contact-email')
})

router.get('/contact-email', function (req, res) {
  res.render('contact-email')
})

router.post('/contact-email', function (req, res) {
  const answer = req.session.data['contact-email']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'contact-email': 'Enter a valid email address.' }
    return res.render('contact-email')
  }
  res.redirect('/product-description')
})

router.get('/product-description', function (req, res) {
  res.render('product-description')
})

router.post('/product-description', function (req, res) {
  const answer = req.session.data['product-description']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'product-description': 'Enter a description of the goods you want investigated.' }
    return res.render('product-description')
  }
  res.redirect('/exporting-countries')
})

router.get('/exporting-countries', function (req, res) {
  res.render('exporting-countries')
})

router.post('/exporting-countries', function (req, res) {
  const answer = req.session.data['exporting-countries']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'exporting-countries': 'Enter the countries where dumped goods are exported from.' }
    return res.render('exporting-countries')
  }
  res.redirect('/financial-data-available')
})

router.get('/financial-data-available', function (req, res) {
  res.render('financial-data-available')
})

router.post('/financial-data-available', function (req, res) {
  const answer = req.session.data['financial-data-available']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'financial-data-available': 'Select whether you have financial statements for 3 years.' }
    return res.render('financial-data-available')
  }
  res.redirect('/check-answers')
})

router.get('/check-answers', function (req, res) {
  res.render('check-answers')
})

router.post('/check-answers', function (req, res) {
  if (!req.session.data['reference']) {
    req.session.data['reference'] = generateReference('ADI')
  }
  res.redirect('/confirmation')
})

router.get('/confirmation', function (req, res) {
  res.render('confirmation')
})

module.exports = router
