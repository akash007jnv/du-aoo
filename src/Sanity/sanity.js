
import  sanityClient from '@sanity/client'



const client = sanityClient({
  projectId: 'yhlm4owv',
  dataset: 'production',
  apiVersion: '2023-01-30', // use current UTC date - see "specifying API version"!
  token: 'sk7t6hwlFhSw473oCkKiChLefNLXCrOuhb307HXuxP3tDoROP4FTw0zfxuw2ZHA1shkmn1UCIjihxEMBWrOJPpeEb4xR2fOxBSWv88oVC8Yd4oRJPP6hi6xN8mEjsihmAThiKBays9UjlYRDibaiqmVxj7jiQWuo5uU67mgnk39Aw1fnq49b', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client