// 邏輯思維：
// 求費氏數列中第n個值 fibonacci(n)

// 數列邏輯：
// fibonacciNumbers = [0, 1, 1(0+1), 2(1+1), 3(1+2), 5(2+3), 8(3+5), 13(5+8), 21(8+13), 34(13+21), 55(21+34)]

// fibonacci(n) = fibonacci(n-2) + fibonacci(n-1)


function fibonacci(n) {
  if (n <= 2) {
    return [0, 1][n - 1]
  }
  return fibonacci(n - 2) + fibonacci(n - 1)
}

fibonacci(3) // 1
fibonacci(5) // 3
