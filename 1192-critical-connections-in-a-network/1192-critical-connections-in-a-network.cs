public class Solution {
    int timeStamp = 0;
    int[] arrival;
    int[] lowestArrival;
    bool[] visited;
    IList<IList<int>> result;
    public IList<IList<int>> CriticalConnections(int n, IList<IList<int>> connections) {
        var adjList = new Dictionary<int, IList<int>>();
        for(int i=0;i<n;i++)
            adjList.Add(i, new List<int>());
        
        //build graph
        foreach(var connection in connections)
        {
            adjList[connection[0]].Add(connection[1]);
            adjList[connection[1]].Add(connection[0]);
        }
        
        arrival = new int[n];
        lowestArrival = new int[n];
        visited = new bool[n];
        result = new List<IList<int>>();
        Dfs(0, adjList,0);
        return result;
        //return result.Count > 0 ? result : new List<IList<int>>{new List<int>{-1,-1}}; 
    }
    
    private int Dfs(int node, Dictionary<int,IList<int>> adjList,int parent)
    {
        visited[node] = true;
        arrival[node] = timeStamp++;
        lowestArrival[node] = arrival[node];
        foreach(var neighbor in adjList[node])
        {
            if(!visited[neighbor])
               lowestArrival[node] = Math.Min(Dfs(neighbor, adjList, node), lowestArrival[node]);
            else if(neighbor != parent) //if it's the backedge
               lowestArrival[node] = Math.Min(arrival[neighbor], lowestArrival[node]);
            
        }
        if(lowestArrival[node] == arrival[node] && node != 0)// if there is no backedge and it's not parent
            result.Add(new List<int>{parent,node});
        
        return lowestArrival[node];
    }
}