#
# @lc app=leetcode id=1603 lang=python3
#
# [1603] Design Parking System
#

# @lc code=start
class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self.places = {1: [0, big], 2: [0, medium], 3: [0, small]}
        

    def addCar(self, carType: int) -> bool:
        if self.places[carType][0] < self.places[carType][1]:
           self.places[carType][0] += 1
           return True
        return False
        


# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)
# @lc code=end

