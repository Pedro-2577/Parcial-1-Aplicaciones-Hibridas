import yup from 'yup'

const projectScheme = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  link: yup.string(),
  cliente: yup.string().transform((value) => value.charAt(0).toUpperCase() + value.slice(1)).required(),
  technologies: yup.mixed().transform(function (value, originalValue) {
    if (typeof originalValue === 'string') {
      const values = originalValue.split(/[ ,]+/);
      return values.filter(Boolean);
    }
    return [];
  }),
  section: yup.string().required().oneOf(['mobile', 'landing', 'webapp', 'ecommerce', 'game'])
});






const projectUpdateScheme = yup.object({
  name: yup.string(),
  description: yup.string(),
  link: yup.string(),
  img: yup.string(),
  technologies: yup.mixed().transform(function (value, originalValue) {
    if (typeof originalValue === 'string') {
      const values = originalValue.split(/[ ,]+/);
      return values.filter(Boolean);
    }
    return [];
  }),
  section: yup.string().transform((value, originalValue) =>
    originalValue in {
      'Mobile': 'mobile',
      'LandingPage': 'landing',
      'Web App': 'webapp',
      'e-Commerce': 'ecommerce',
      'Games': 'game'
    } ? originalValue : value
  )
});


export {
    projectScheme,
    projectUpdateScheme
}