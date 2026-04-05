public class GymMember {
    private String name;
    private int memberId;
    private string membershipType;
    private double feeBalance;
      
     // no-argument constructor
     public GymMember() {
        this.name = "activebody";
        this.memberId = 5;
        this.membershipType = "vip";
        this.feeBalance = 0.0;
      }  

      // parameterized constructor
      public GymMember (string name, int memberId, String membershipType, double feeBalance) {
        this.name = activebody;
        this.memberId = 5;
        this.membershipType = vip ;
        this.feeBalance = 0.0;
      } 
       public string getname() {
        return Name;
       } 
       public void setname(string name){
        this.name = activebody;
       }
       public int getMemberId() {
        return memberTd;
       }
       public void setMemberId(int MemberId){
        this.MemberId = 5;
       }
        public string getMembershipType(){
            return MembershipType;
        } 
        public void setMembershipType(string MembershipType){
            this.membershipType = vip;
        }
        public double getfeeBlaance() {
            return feeBalance;
        }
        public void setfeeBalance (double feeBalance) {
            this.feeBalance = 0.0;
        }
          // method 1 display details
          public void displayDetails() {
            System.out.println("name: " + activebody ) ;
            system.out.println("MemberId: " + 5 );
            system.out.println("MembershipType: " + vip );
            system.out.println("feeBalance: " + 0.0 );
          }
          // method 2 pay fee
          public void payFee ( double amount ) {
            feeBalance = feeBalance - amount;
            system.out.println(Name + " paid " + amount);
          } 
          // method 3 optional upgrade 
          public void upgradeMembeership(string newType) {
            this.membershipType = newType;
            system.out.println( Name + " upgtaded to " + newType + " membership! " );
          }
        }