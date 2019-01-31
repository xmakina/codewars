/* global beforeEach */
const User = require('./user')
const Test = require('../framework/Test')

Test.describe('the user object', function () {
  let user = null

  beforeEach(() => {
    user = new User()
  })

  Test.describe('initialises with starting values', function () {
    Test.it('rank of -8', () => {
      Test.assertEquals(user.rank, -8)
    })
    Test.it('progress of 0', () => {
      Test.assertEquals(user.progress, 0)
    })
  })

  Test.describe('can gain progress', () => {
    Test.it('Completing an activity that is ranked the same as that of the user\'s will be worth 3 points', () => {
      user = new User(3)
      user.incProgress(3)
      Test.assertEquals(user.progress, 3)
    })
    Test.it('Completing an activity that is ranked one ranking lower than the user\'s will be worth 1 point', () => {
      user = new User(3)
      user.incProgress(2)
      Test.assertEquals(user.progress, 1)
    })
    Test.it('Any activities completed that are ranking 2 levels or more lower than the user\'s ranking will be ignored', () => {
      user = new User(3)
      user.incProgress(1)
      Test.assertEquals(user.progress, 0)
    })
    Test.describe('Completing an activity ranked higher than the current user\'s rank will accelerate the rank progression', () => {
      Test.it('increases by 10 for one difference', () => {
        user = new User(3)
        user.incProgress(4)
        Test.assertEquals(user.progress, 10)
      })
      Test.it('increases by 40 for two difference', () => {
        user = new User(3)
        user.incProgress(5)
        Test.assertEquals(user.progress, 40)
      })
      Test.it('ignores rank zero', () => {
        user = new User(-1)
        user.incProgress(1)
        Test.assertEquals(user.progress, 10)
      })
      Test.it('ignores rank zero', () => {
        user = new User(1)
        user.incProgress(-1)
        Test.assertEquals(user.progress, 1)
      })
    })
    Test.it('Ranks up at 100 progress', () => {
      user = new User(3, 99)
      user.incProgress(2)
      Test.assertEquals(user.rank, 4)
      Test.assertEquals(user.progress, 0)
    })
    Test.it('Preserves excess on rank up', () => {
      user = new User(3, 99)
      user.incProgress(3)
      Test.assertEquals(user.rank, 4)
      Test.assertEquals(user.progress, 2)
    })
    Test.describe('skips rank zero', () => {
      Test.it('when ranking up', () => {
        user.rank = -1
        user.incProgress(1)
        Test.assertEquals(user.rank, -1)
        Test.assertEquals(user.progress, 10)
      })
      Test.it('when ranking up', () => {
        user = new User(-2, 0)
        user.incProgress(1)
        Test.assertEquals(user.rank, -2)
        Test.assertEquals(user.progress, 40)
      })
    })
    Test.it('will not go over 8', () => {
      user = new User(7, 99)
      user.incProgress(8)
      Test.assertEquals(user.rank, 8)
      Test.assertEquals(user.progress, 0)
    })
  })
})
