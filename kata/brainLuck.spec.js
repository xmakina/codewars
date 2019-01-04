const brainLuck = require('./brainLuck')
const Test = require('../framework/Test')

Test.describe('BrainLuck', function () {
  Test.it('can echo until byte(255) encountred', () => {
    Test.assertEquals(brainLuck(',+[-.,+]', 'Codewars' + String.fromCharCode(255)), 'Codewars')
  })
  Test.it('can echo until byte(0) encountred', () => {
    Test.assertEquals(brainLuck(',[.[-],]', 'Codewars' + String.fromCharCode(0)), 'Codewars')
  })
  Test.it('multiply two numbers', () => {
    Test.assertEquals(brainLuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(1, 0)), String.fromCharCode(0))
  })
  Test.it('a big program', () => {
    Test.assertEquals(brainLuck(',>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<+>>[-]]<<<<<<<]>>>>>[++++++++++++++++++++++++++++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.[-]<<<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]', '\n'),
      '1, 1, 2, 3, 5, 8, 13, 21, 34, 55')
  })
})
