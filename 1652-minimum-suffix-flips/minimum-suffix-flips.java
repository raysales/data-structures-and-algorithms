class Solution {
    public int minFlips(String target) {
        int flipCnt = 0;
        // initialized 1st bit to flip
        int currBit = 0;
        
        for (int i = 0; i < target.length(); i++) {
            // convert char to int (0 or 1)
            int targetBit = target.charAt(i) - '0'; 
            if (targetBit != currBit) {
                flipCnt++;
                // XOR toggles currBit
                currBit ^= 1;
            }
        }
        
        return flipCnt;        
    }
}