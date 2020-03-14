/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author MAromdhane
 */
    
import java.io.*;
import java.net.*;

public class TransportServer

{
	public TransportServer(int portnum)
	{
		try
		{
			server = new ServerSocket(portnum);
		}
		catch (Exception err)
		{
			System.out.println(err);
		}
	}

	public void serve()
	{
		try
		{
			while (true)
			{
				Socket client = server.accept();
				BufferedReader r = new BufferedReader(new InputStreamReader(client.getInputStream()));
				PrintWriter w = new PrintWriter(client.getOutputStream(), true);
				w.println("Welcome to the Java TransportServer.  Type 'bye' to close.");
				String line;
				do
				{
					line = r.readLine();
					if ( line != null )
                                        {
                                            System.out.println("Got"+line);
                                            w.println("Got: "+ line);
                                        }
				}
				while ( !line.trim().equals("bye") );
				client.close();
			}
		}
		catch (Exception err)
		{
			System.err.println(err);
		}
	}

	public static void main(String[] args)
	{
		TransportServer s = new TransportServer(8080);
		s.serve();
	}

	private ServerSocket server;
}
