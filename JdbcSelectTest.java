import java.sql.*;

public class JdbcSelectTest {
    public static void main(String[] args) {
        String driver = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/todo";
        String username = "rimjhim";
        String password = "Tester@123";

        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(url, username, password);
            System.out.println("Connection to MySQL database established successfully!");
            stmt = conn.createStatement();

            String strSelect = "SELECT * FROM tasks";
            System.out.println("The SQL statement is: " + strSelect + "\n");

            rs = stmt.executeQuery(strSelect);

            System.out.println("The records selected are:");
            int rowCount = 0;

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println("ID: " + id + ", Task: " + name);
                ++rowCount;
            }
            System.out.println("Total number of tasks = " + rowCount);
        } catch (ClassNotFoundException | SQLException ex) {
            ex.printStackTrace();
        } finally {
            try {
                if (rs != null)
                    rs.close();
                if (stmt != null)
                    stmt.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
