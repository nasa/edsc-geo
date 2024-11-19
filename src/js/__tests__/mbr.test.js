const { mbr } = require('../mbr')

describe('mbr', () => {
  describe('when the spatial is a point', () => {
    test('returns the mbr', () => {
      const point = '-77, 34'

      const result = {
        swLat: 33.99999999,
        swLng: -77.00000001,
        neLat: 34.00000001,
        neLng: -76.99999999
      }

      expect(mbr({ point })).toEqual(result)
    })

    test('returns the mbr with a precision of 3', () => {
      const point = '-77, 34'

      const result = {
        swLat: 33.999,
        swLng: -77.001,
        neLat: 34.001,
        neLng: -76.999
      }

      expect(mbr({ point }, { precision: 3 })).toEqual(result)
    })
  })

  describe('when the spatial is a circle', () => {
    test('returns the mbr', () => {
      const circle = '-77, 34, 20000'

      const result = {
        swLat: 33.8203369445857,
        swLng: -77.21671280212378,
        neLat: 34.1796630554143,
        neLng: -76.78328719787622
      }

      expect(mbr({ circle })).toEqual(result)
    })

    test('returns the mbr with a precision of 3', () => {
      const circle = '-77, 34, 20000'

      const result = {
        swLat: 33.82,
        swLng: -77.217,
        neLat: 34.18,
        neLng: -76.783
      }

      expect(mbr({ circle }, { precision: 3 })).toEqual(result)
    })
  })

  describe('when the spatial is a line', () => {
    test('returns the mbr', () => {
      const line = '-0.37,-14.07,4.75,1.27,25.13,-15.51'

      const result = {
        swLat: -15.510011231596257,
        swLng: -0.37000000000002786,
        neLat: 1.2700000000000229,
        neLng: 25.130000000000013
      }

      expect(mbr({ line })).toEqual(result)
    })

    test('returns the mbr with a precision of 3', () => {
      const line = '-0.37,-14.07,4.75,1.27,25.13,-15.51'

      const result = {
        swLat: -15.51,
        swLng: -0.37,
        neLat: 1.27,
        neLng: 25.13
      }

      expect(mbr({ line }, { precision: 3 })).toEqual(result)
    })
  })

  describe('when the spatial is a boundingBox', () => {
    test('returns the mbr for boundingBox spatial', () => {
      const boundingBox = '0,5,10,15'

      const result = {
        swLat: 5,
        swLng: 0,
        neLat: 15,
        neLng: 10
      }

      expect(mbr({ boundingBox })).toEqual(result)
    })

    test('returns the mbr with a precision of 3', () => {
      const boundingBox = '0,5,10,15'

      const result = {
        swLat: 5,
        swLng: 0,
        neLat: 15,
        neLng: 10
      }

      expect(mbr({ boundingBox }, { precision: 3 })).toEqual(result)
    })
  })

  describe('when the spatial is a polygon', () => {
    test('returns the mbr', () => {
      const polygon = '-29.8125,39.86484,-23.0625,-19.74405,15.75,20.745,-29.8125,39.86484'

      const result = {
        swLat: -19.744049999999977,
        swLng: -29.81249999999999,
        neLat: 39.864840000000015,
        neLng: 15.749999999999988
      }

      expect(mbr({ polygon })).toEqual(result)
    })

    test('returns the mbr with a precision of 3', () => {
      const polygon = '-29.8125,39.86484,-23.0625,-19.74405,15.75,20.745,-29.8125,39.86484'

      const result = {
        swLat: -19.744,
        swLng: -29.812,
        neLat: 39.865,
        neLng: 15.75
      }

      expect(mbr({ polygon }, { precision: 3 })).toEqual(result)
    })
  })
})
