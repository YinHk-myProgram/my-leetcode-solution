#### Algorithm

linear search for nums[i]+nums[front]+nums[rear]=0
front is i + 1 for each iteration step
rear is nums.length-1

if  nums[i]+nums[front]+nums[rear] = 0, this is answer,
if  nums[i]+nums[front]+nums[rear] >0, means rear is large, then rear shift left
if  nums[i]+nums[front]+nums[rear] <0, means front is small, then front shift right

