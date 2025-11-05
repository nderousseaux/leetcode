import pyautogui, time, random
time.sleep(2)
wait = 10
while True:
#repeat 10 times
    time.sleep(wait)
    time.sleep(random.randint(0, 5))
    pyautogui.click()