public class Solution {
    public static void main(String[] args) {
        System.out.println(fib(10));
    }
    public static int fib(int n) {
        int secondLast = 0;
        int last = 1;
        for(int i = 0; i < n; i++){
            int ans = secondLast + last;
            secondLast = last;
            last = ans;
        }
        return secondLast;
    }
}
