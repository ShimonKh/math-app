export const MenuConfig =
{
  TASKS_LEVEL_0 : [
    {firstView: 'a + b', secondView: 'a - b', level: 1, isActive: true},
    {firstView: 'aa + b', secondView: 'aa - b', level: 2, isActive: false},
    {firstView: 'aa + bb', secondView: 'aa - bb', level: 3, isActive: false},
    {firstView: 'aaa + bbb', secondView: 'aaa - bbb', level: 4, isActive: false},
  ],
    TASKS_LEVEL_1 : [
      {firstView: 'a * b', secondView: 'aa / b', level: 1, isActive: false},
      {firstView: 'aa * bb', secondView: 'aaa / bb', level: 2, isActive: true},
    ],
    NUMBER_OF_TASK : [3, 10, 15, 20, 25, 30]

}
