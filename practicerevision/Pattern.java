import java.util.Scanner;
// public class Pattern {
//     public static void main(String[] args) {
//         int n = 3;

//         for (int i = 1; i <= n; i++) {
//             for (int j = 1; j <= n; j++) {
//                 System.out.print(" *");
//             }
//             System.out.println();
//         }
//     }
// }

// public class Pattern {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int secondLast = 0;
//         int last = 1;
//         for (int i = 0; i < n; i++) {
//             System.out.println(secondLast);
//             int ans = secondLast + last;
//             secondLast = last;
//             last = ans;
//         }
//     }
// }

public class Pattern {
    public static void main(String[] args) {
        fun();
    }

    public static String teacher = "sanket"; // teacher -> GC -> sanket

    public static void ask(String question) {   // ask -> GC, question -> ask scope
        System.out.println(teacher + " " + question); //teacher -> Sanket // o/p - Sanket Why?
    }

    public static void fun() {
        final String teacher = "Pulkit";
        ask("Why?");
    }

}
